// Pure slug helpers — no data imports, safe to use in any page bundle.

export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Stable per-item anchor derived from the question / heading text.
// Used both by the pages (as element id) and the search index (as href hash).
export const anchorFromText = (value: string): string => {
  const base = slugify(value).slice(0, 60).replace(/-+$/, '');
  return base ? `q-${base}` : 'q';
};
