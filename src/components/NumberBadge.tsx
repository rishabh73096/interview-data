import React from 'react';

interface NumberBadgeProps {
  n: number;
  size?: 'sm' | 'md';
}

const NumberBadge: React.FC<NumberBadgeProps> = ({ n, size = 'md' }) => (
  <span
    className={`flex shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#93764f] via-[#a98c62] to-[#c7ad82] font-bold text-white ${
      size === 'sm' ? 'h-6 w-6 text-[10px]' : 'h-8 w-8 text-xs'
    }`}
  >
    {String(n).padStart(2, '0')}
  </span>
);

export default NumberBadge;
