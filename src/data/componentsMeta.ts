// Name + description for every live component on /components.
// Kept separate from ComponentsClient so the global search index can reuse it
// without pulling in all 26 component modules.

export interface ComponentMeta {
  name: string;
  description: string;
}

export const componentsMeta: ComponentMeta[] = [
  { name: 'Accordion', description: 'Collapsible panels with single or multi-open state control.' },
  { name: 'ApiFetch', description: 'Fetching data from an API with loading, error and success states.' },
  { name: 'Autocomplete', description: 'Type-ahead search suggestions with keyboard navigation.' },
  { name: 'Carousel', description: 'Auto-sliding image carousel with manual prev/next controls.' },
  { name: 'Counter', description: "The 'hello world' of React state — increment, decrement, reset." },
  { name: 'DarkModeToggle', description: 'Theme switcher driven by state and conditional classNames.' },
  { name: 'DataTable', description: 'Sortable, paginated table for rendering tabular data.' },
  { name: 'DebounceSearch', description: 'Search input debounced to cut down on redundant API calls.' },
  { name: 'DragDropList', description: 'Reorderable list built with native drag-and-drop events.' },
  { name: 'FileExplorer', description: 'Recursively rendered folder/file tree with expand-collapse.' },
  { name: 'FormValidation', description: 'Controlled form with inline field-level validation rules.' },
  { name: 'InfiniteScroll', description: 'Loads more items automatically as the user scrolls down.' },
  { name: 'KanbanBoard', description: 'Drag-and-drop task board spanning multiple columns.' },
  { name: 'Loader', description: 'Reusable animated loading spinner.' },
  { name: 'Modal', description: 'Accessible dialog overlay with open/close state handling.' },
  { name: 'NestedComments', description: 'Recursive comment threads with nested replies.' },
  { name: 'OtpInput', description: 'Segmented OTP input with auto-focus between boxes.' },
  { name: 'Pagination', description: 'Classic page-number navigation for long lists.' },
  { name: 'ProductPagination', description: 'Paginated product grid, e-commerce style.' },
  { name: 'SearchFilter', description: 'Filters a list in real time as the user types.' },
  { name: 'ShoppingCart', description: 'Cart state management — add, remove, update quantities.' },
  { name: 'StarRating', description: 'Interactive star rating with hover preview.' },
  { name: 'Stopwatch', description: 'Start, stop and reset a timer using intervals and refs.' },
  { name: 'Tabs', description: 'Switches between tabbed content panels.' },
  { name: 'Toast', description: 'Auto-dismissing toast notifications, queued and stacked.' },
  { name: 'Todo', description: 'Classic todo list with memoized, re-render-safe list items.' },
];
