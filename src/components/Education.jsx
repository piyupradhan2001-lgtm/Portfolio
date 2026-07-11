import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import React from 'react';
import { education } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation"
          description="Formal education supporting practical Java, database, and full-stack development skills."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                  <GraduationCap size={27} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{item.duration}</p>
                  <h3 className="mt-3 text-xl font-black leading-snug text-white light:text-slate-950">
                    {item.degree}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300 light:text-slate-600">{item.institution}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
