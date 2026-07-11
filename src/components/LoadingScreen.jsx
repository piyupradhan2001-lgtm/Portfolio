import { motion } from 'framer-motion';
import React from 'react';
import { profile } from '../data/portfolio.js';

export default function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
    >
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent text-2xl font-black text-white shadow-glow"
        >
          {profile.initials}
        </motion.div>
        <div className="mt-5 h-1.5 w-48 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            animate={{ x: ['-100%', '120%'] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}
