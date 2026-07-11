import { motion } from 'framer-motion';
import React from 'react';
import { about, stats } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

const aboutCards = [
  ['Introduction', about.intro],
  ['Education', about.education],
  ['Experience', about.experience],
  ['Career Objective', about.objective]
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About Me"
          title="Backend thinking with full-stack polish"
          description="A clean engineering profile shaped around practical Java development, reliable APIs, and recruiter-friendly delivery."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {aboutCards.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-xl font-black text-white light:text-slate-950">{title}</h3>
              <p className="mt-4 leading-8 text-slate-300 light:text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -7 }}
                className="glass rounded-3xl p-6 text-center"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 text-accent">
                  <Icon size={26} />
                </div>
                <p className="mt-4 text-3xl font-black gradient-text">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-300 light:text-slate-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
