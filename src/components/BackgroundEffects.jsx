import { motion } from 'framer-motion';
import React from 'react';

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  delay: (index % 8) * 0.35,
  duration: 7 + (index % 6)
}));

export default function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-[-8%] top-1/3 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-[-12%] left-1/3 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-200/50"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -28, 0], opacity: [0.25, 0.95, 0.25], scale: [1, 1.8, 1] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
