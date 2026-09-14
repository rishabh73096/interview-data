"use client";

import React, { useEffect, useMemo, useState } from 'react';

import Accordion from '../../components/interview/Accordion';
import ApiFetch from '../../components/interview/ApiFetch';
import Autocomplete from '../../components/interview/Autocomplete';
import Carousel from '../../components/interview/Carousel';
import Counter from '../../components/interview/Counter';
import DarkModeToggle from '../../components/interview/DarkModeToggle';
import DataTable from '../../components/interview/DataTable';
import DebounceSearch from '../../components/interview/DebounceSearch';
import DragDropList from '../../components/interview/DragDropList';
import FileExplorer from '../../components/interview/FileExplorer';
import FormValidation from '../../components/interview/FormValidation';
import InfiniteScroll from '../../components/interview/InfiniteScroll';
import KanbanBoard from '../../components/interview/KanbanBoard';
import Loader from '../../components/interview/Loader';
import Modal from '../../components/interview/Modal';
import NestedComments from '../../components/interview/NestedComments';
import OtpInput from '../../components/interview/OtpInput';
import Pagination from '../../components/interview/Pagination';
import ProductPagination from '../../components/interview/ProductPagination';
import SearchFilter from '../../components/interview/SearchFilter';
import ShoppingCart from '../../components/interview/ShoppingCart';
import StarRating from '../../components/interview/StarRating';
import Stopwatch from '../../components/interview/Stopwatch';
import Tabs from '../../components/interview/Tabs';
import Toast from '../../components/interview/Toast';
import Todo from '../../components/interview/Todo';

import { componentSource } from '../../data/componentSource';
import { componentsMeta } from '../../data/componentsMeta';
import CodeDrawer from '../../components/CodeDrawer';
import NumberBadge from '../../components/NumberBadge';
import PageHero from '../../components/PageHero';

const registry: Record<string, React.ComponentType> = {
  Accordion,
  ApiFetch,
  Autocomplete,
  Carousel,
  Counter,
  DarkModeToggle,
  DataTable,
  DebounceSearch,
  DragDropList,
  FileExplorer,
  FormValidation,
  InfiniteScroll,
  KanbanBoard,
  Loader,
  Modal,
  NestedComments,
  OtpInput,
  Pagination,
  ProductPagination,
  SearchFilter,
  ShoppingCart,
  StarRating,
  Stopwatch,
  Tabs,
  Toast,
  Todo,
};

const components = componentsMeta.map((meta) => ({
  ...meta,
  Component: registry[meta.name],
}));

const ComponentsClient: React.FC = () => {
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  // Arriving from global search (/components#comp-Name) — open that source.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));
    if (hash.startsWith('comp-')) {
      const name = hash.slice('comp-'.length);
      if (componentSource[name]) setActiveCode(name);
    }
  }, []);

  const filtered = useMemo(() => {
    if (!normalizedQuery) return components;
    return components.filter(
      ({ name, description }) =>
        name.toLowerCase().includes(normalizedQuery) || description.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6">
      <PageHero
        eyebrow="Frontend Interview Prep"
        title="A hands-on showcase of"
        accent="React interview components"
        description={
          <>
            26 components covering the hooks, state patterns and UI building blocks that show up again
            and again in frontend interviews — from a simple counter to a full drag-and-drop Kanban
            board. Every one is live below, built and rendered from scratch.
          </>
        }
      >
        <div className="mt-4 w-full max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a component…"
            inputMode="search"
            className="w-full rounded-full border border-[#9a3412]/12 bg-[#f0e7d6]/55 px-5 py-3 text-sm shadow-sm outline-none transition-colors focus:border-[#f97316] dark:border-white/10 dark:bg-white/5 dark:text-white"
          />
          {normalizedQuery && (
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {filtered.length} of {components.length} components match &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </PageHero>

      <section className="pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          {filtered.map(({ name, description, Component }, index) => (
            <div
              key={name}
              id={`comp-${name}`}
              className="scroll-mt-24 rounded-xl border border-[#9a3412]/12 bg-[#f0e7d6]/55 p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6 dark:border-white/10 dark:bg-[#f97316]/8"
            >
              <div className="mb-4 flex items-start justify-between gap-2 sm:gap-3">
                <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
                  <NumberBadge n={index + 1} />
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-semibold text-gray-900 dark:text-white">{name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveCode(name)}
                  aria-label={`View ${name} source code`}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-[#f97316] hover:text-[#c2410c] active:bg-black/5 sm:px-3 dark:border-white/10 dark:text-gray-300 dark:hover:text-[#fdba74] dark:active:bg-white/10"
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

        {filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500 dark:text-gray-400">No components match your search.</p>
        )}
      </section>

      <CodeDrawer
        title={activeCode}
        code={activeCode ? componentSource[activeCode] : null}
        onClose={() => setActiveCode(null)}
      />
    </main>
  );
};

export default ComponentsClient;
