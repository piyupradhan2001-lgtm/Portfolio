import { motion } from 'framer-motion';
import React from 'react';
import { experiences } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

export default function Timeline() {
  return (
    <section id="experience" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Practical engineering timeline"
          description="A focused record of internship, project, and hands-on development work across backend and full-stack workflows."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-8 pl-14 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'}`}
            >
              <span className="absolute left-1.5 top-7 z-10 h-8 w-8 rounded-full border-4 border-ink bg-gradient-to-br from-primary to-accent shadow-glow md:left-auto md:right-[-16px] light:border-slate-50" />
              {index % 2 === 1 && <span className="hidden md:absolute md:left-[-16px] md:top-7 md:z-10 md:block md:h-8 md:w-8 md:rounded-full md:border-4 md:border-ink md:bg-gradient-to-br md:from-secondary md:to-accent md:shadow-glow light:md:border-slate-50" />}
              <div className="glass rounded-3xl p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{item.duration}</p>
                <h3 className="mt-3 text-xl font-black text-white light:text-slate-950">{item.role}</h3>
                <p className="mt-1 font-semibold text-slate-300 light:text-slate-600">{item.company}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300 light:text-slate-600">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
