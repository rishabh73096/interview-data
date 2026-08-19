"use client";

import React, { useState } from 'react';

import Accordion from '../components/interview/Accordion';
import ApiFetch from '../components/interview/ApiFetch';
import Autocomplete from '../components/interview/Autocomplete';
import Carousel from '../components/interview/Carousel';
import Counter from '../components/interview/Counter';
import DarkModeToggle from '../components/interview/DarkModeToggle';
import DataTable from '../components/interview/DataTable';
import DebounceSearch from '../components/interview/DebounceSearch';
import DragDropList from '../components/interview/DragDropList';
import FileExplorer from '../components/interview/FileExplorer';
import FormValidation from '../components/interview/FormValidation';
import InfiniteScroll from '../components/interview/InfiniteScroll';
import KanbanBoard from '../components/interview/KanbanBoard';
import Loader from '../components/interview/Loader';
import Modal from '../components/interview/Modal';
import NestedComments from '../components/interview/NestedComments';
import OtpInput from '../components/interview/OtpInput';
import Pagination from '../components/interview/Pagination';
import ProductPagination from '../components/interview/ProductPagination';
import SearchFilter from '../components/interview/SearchFilter';
import ShoppingCart from '../components/interview/ShoppingCart';
import StarRating from '../components/interview/StarRating';
import Stopwatch from '../components/interview/Stopwatch';
import Tabs from '../components/interview/Tabs';
import Toast from '../components/interview/Toast';
import Todo from '../components/interview/Todo';

import { componentSource } from '../data/componentSource';
import CodeDrawer from '../components/CodeDrawer';

const components: { name: string; description: string; Component: React.ComponentType }[] = [
  { name: 'Accordion', description: 'Collapsible panels with single or multi-open state control.', Component: Accordion },
  { name: 'ApiFetch', description: 'Fetching data from an API with loading, error and success states.', Component: ApiFetch },
  { name: 'Autocomplete', description: 'Type-ahead search suggestions with keyboard navigation.', Component: Autocomplete },
  { name: 'Carousel', description: 'Auto-sliding image carousel with manual prev/next controls.', Component: Carousel },
  { name: 'Counter', description: "The 'hello world' of React state — increment, decrement, reset.", Component: Counter },
  { name: 'DarkModeToggle', description: 'Theme switcher driven by state and conditional classNames.', Component: DarkModeToggle },
  { name: 'DataTable', description: 'Sortable, paginated table for rendering tabular data.', Component: DataTable },
  { name: 'DebounceSearch', description: 'Search input debounced to cut down on redundant API calls.', Component: DebounceSearch },
  { name: 'DragDropList', description: 'Reorderable list built with native drag-and-drop events.', Component: DragDropList },
  { name: 'FileExplorer', description: 'Recursively rendered folder/file tree with expand-collapse.', Component: FileExplorer },
  { name: 'FormValidation', description: 'Controlled form with inline field-level validation rules.', Component: FormValidation },
  { name: 'InfiniteScroll', description: 'Loads more items automatically as the user scrolls down.', Component: InfiniteScroll },
  { name: 'KanbanBoard', description: 'Drag-and-drop task board spanning multiple columns.', Component: KanbanBoard },
  { name: 'Loader', description: 'Reusable animated loading spinner.', Component: Loader },
  { name: 'Modal', description: 'Accessible dialog overlay with open/close state handling.', Component: Modal },
  { name: 'NestedComments', description: 'Recursive comment threads with nested replies.', Component: NestedComments },
  { name: 'OtpInput', description: 'Segmented OTP input with auto-focus between boxes.', Component: OtpInput },
  { name: 'Pagination', description: 'Classic page-number navigation for long lists.', Component: Pagination },
  { name: 'ProductPagination', description: 'Paginated product grid, e-commerce style.', Component: ProductPagination },
  { name: 'SearchFilter', description: 'Filters a list in real time as the user types.', Component: SearchFilter },
  { name: 'ShoppingCart', description: 'Cart state management — add, remove, update quantities.', Component: ShoppingCart },
  { name: 'StarRating', description: 'Interactive star rating with hover preview.', Component: StarRating },
  { name: 'Stopwatch', description: 'Start, stop and reset a timer using intervals and refs.', Component: Stopwatch },
  { name: 'Tabs', description: 'Switches between tabbed content panels.', Component: Tabs },
  { name: 'Toast', description: 'Auto-dismissing toast notifications, queued and stacked.', Component: Toast },
  { name: 'Todo', description: 'Classic todo list with memoized, re-render-safe list items.', Component: Todo },
];

const HomePage: React.FC = () => {
  const [activeCode, setActiveCode] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6">
      <section className="flex flex-col items-center gap-4 py-14 text-center sm:gap-5 sm:py-20">
        <span className="rounded-full border border-black/10 bg-black/3 px-4 py-1 text-xs font-medium tracking-wide text-gray-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
          Frontend Interview Prep
        </span>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          A hands-on showcase of{' '}
          <span className="bg-linear-to-r from-sky-600 via-cyan-500 to-emerald-400 bg-clip-text text-transparent">
            React interview components
          </span>
        </h1>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base lg:text-lg dark:text-gray-300">
          26 components covering the hooks, state patterns and UI building blocks that show
          up again and again in frontend interviews — from a simple counter to a full
          drag-and-drop Kanban board. Every one is live below, built and rendered from
          scratch.
        </p>
        <a
          href="#components"
          className="mt-2 rounded-full bg-linear-to-r from-sky-600 via-cyan-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
        >
          Browse all components ↓
        </a>
      </section>

      <section id="components" className="scroll-mt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {components.map(({ name, description, Component }, index) => (
            <div
              key={name}
              className="rounded-xl border border-black/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6 dark:border-white/10 dark:bg-white/3"
            >
              <div className="mb-4 flex items-start justify-between gap-2 sm:gap-3">
                <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-sky-600 via-cyan-500 to-emerald-400 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCode(name)}
                  aria-label={`View ${name} source code`}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-sky-500 hover:text-sky-600 active:bg-black/5 sm:px-3 dark:border-white/10 dark:text-gray-300 dark:hover:text-sky-400 dark:active:bg-white/10"
                >
                  <span className="font-mono">{'</>'}</span>
                  <span className="hidden sm:inline">View Code</span>
                </button>
              </div>
              <div className="rounded-lg border border-dashed border-black/10 bg-black/1.5 p-3 sm:p-5 dark:border-white/10 dark:bg-white/2">
                <Component />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CodeDrawer
        title={activeCode}
        code={activeCode ? componentSource[activeCode] : null}
        onClose={() => setActiveCode(null)}
      />
    </main>
  );
};

export default HomePage;
