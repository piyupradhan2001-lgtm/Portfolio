import { motion } from 'framer-motion';
import React from 'react';

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white light:text-slate-950 sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-8 text-slate-300 light:text-slate-600">{description}</p>}
    </motion.div>
  );
}
