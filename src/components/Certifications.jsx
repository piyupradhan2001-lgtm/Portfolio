import { motion } from 'framer-motion';
import React from 'react';
import { certifications } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Certifications"
          title="Certificates and leadership"
          description="Credentials that highlight full-stack training and college-level event coordination experience."
        />

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -7, scale: 1.02 }}
                className="glass rounded-3xl p-5"
              >
                <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-gradient-to-br from-primary/25 via-secondary/20 to-accent/25">
                  <Icon className="text-6xl text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-black text-white light:text-slate-950">{cert.title}</h3>
                <p className="mt-2 text-sm text-slate-300 light:text-slate-600">{cert.organization}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
