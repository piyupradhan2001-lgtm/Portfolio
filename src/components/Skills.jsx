import { motion } from 'framer-motion';
import React from 'react';
import { skillGroups } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Technology stack built for real applications"
          description="Animated skill cards with backend depth, frontend fluency, database confidence, tooling practice, and professional collaboration habits."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                    <GroupIcon size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-white light:text-slate-950">{group.title}</h3>
                </div>
                <div className="grid gap-4">
                  {group.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.015 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-200 light:bg-white"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <Icon className="text-2xl text-accent" />
                            <span className="font-bold text-white light:text-slate-950">{skill.name}</span>
                          </div>
                          <span className="text-sm font-bold text-slate-300 light:text-slate-600">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-800 light:bg-slate-200">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: index * 0.04 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
