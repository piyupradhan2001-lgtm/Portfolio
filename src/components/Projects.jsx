import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
import { projects } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Backend-heavy projects with product polish"
          description="Each project is shaped around practical workflows, clean APIs, recruiter-friendly features, and scalable implementation habits."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass group overflow-hidden rounded-3xl"
            >
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.imageTone}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.38),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.24),transparent_24%)]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-slate-950/28 p-5 backdrop-blur-md">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Project Preview</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="leading-8 text-slate-300 light:text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100 light:text-cyan-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="rounded-2xl bg-white/[0.04] px-3 py-2 text-sm text-slate-300 light:bg-slate-100 light:text-slate-700">
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.github} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:border-accent hover:text-accent light:border-slate-200 light:text-slate-900">
                    <Github size={17} />
                    GitHub
                  </a>
                  <a href={project.live} className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:scale-105">
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
