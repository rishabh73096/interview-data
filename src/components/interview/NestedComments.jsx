"use client";
import { useState } from "react";

const INITIAL_COMMENTS = [
  {
    id: "1",
    author: "Amit",
    text: "Great write-up on recursion!",
    replies: [
      {
        id: "1-1",
        author: "Priya",
        text: "Agreed, the diagrams helped a lot.",
        replies: [],
      },
    ],
  },
  {
    id: "2",
    author: "Rahul",
    text: "Can you cover memoization next?",
    replies: [],
  },
];

function addReply(comments, parentId, reply) {
  return comments.map((comment) => {
    if (comment.id === parentId) {
      return { ...comment, replies: [...comment.replies, reply] };
    }
    return { ...comment, replies: addReply(comment.replies, parentId, reply) };
  });
}

// Recursive: each comment renders its own replies as more <Comment> nodes,
// so a thread can nest arbitrarily deep with no extra logic per level.
function Comment({ comment, onReply, depth }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const hasReplies = comment.replies.length > 0;

  const submitReply = () => {
    if (!replyText.trim()) return;
    onReply(comment.id, replyText);
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <li className="mt-3">
      <div className="flex items-start gap-2">
        {hasReplies && (
          <button
            onClick={() => setCollapsed((c) => !c)}
            className="mt-0.5 text-xs text-gray-400 hover:text-gray-600 w-4"
            aria-label={collapsed ? "Expand replies" : "Collapse replies"}
          >
            {collapsed ? "+" : "−"}
          </button>
        )}
        <div className="flex-1">
          <p className="text-sm">
            <span className="font-medium text-gray-800 dark:text-gray-100">{comment.author}</span>{" "}
            <span className="text-gray-600 dark:text-gray-300">{comment.text}</span>
          </p>
          <button
            onClick={() => setShowReplyBox((s) => !s)}
            className="mt-1 text-xs text-blue-600 hover:underline"
          >
            Reply
          </button>

          {showReplyBox && (
            <div className="mt-2 flex gap-2">
              <input
                autoFocus
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitReply()}
                placeholder={`Reply to ${comment.author}...`}
                className="flex-1 rounded-md border border-gray-300 px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
              />
              <button
                onClick={submitReply}
                className="px-2 py-1 rounded-md bg-blue-600 text-white text-xs hover:bg-blue-700"
              >
                Post
              </button>
            </div>
          )}

          {!collapsed && hasReplies && (
            <ul className="pl-4 border-l border-gray-200 dark:border-gray-700">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} onReply={onReply} depth={depth + 1} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export default function NestedComments() {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState("");

  const handleReply = (parentId, text) => {
    const reply = { id: `${parentId}-${Date.now()}`, author: "You", text, replies: [] };
    setComments((prev) => addReply(prev, parentId, reply));
  };

  const addTopLevelComment = () => {
    if (!newComment.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: String(Date.now()), author: "You", text: newComment, replies: [] },
    ]);
    setNewComment("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-center">Nested Comments</h2>

      <div className="flex gap-2">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTopLevelComment()}
          placeholder="Add a comment..."
          className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent"
        />
        <button
          onClick={addTopLevelComment}
          className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Post
        </button>
      </div>

      <ul className="mt-2">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onReply={handleReply} depth={0} />
        ))}
      </ul>
    </div>
  );
}
