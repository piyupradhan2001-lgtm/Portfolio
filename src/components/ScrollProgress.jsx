import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress.js';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed left-0 top-0 z-[90] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-glow transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
