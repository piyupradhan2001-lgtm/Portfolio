import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MousePointer2 } from 'lucide-react';
import React from 'react';
import { awards, highlights, profile } from '../data/portfolio.js';
import { useTypingText } from '../hooks/useTypingText.js';

export default function Hero() {
  const typedText = useTypingText(profile.typingRoles);

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 light:text-cyan-700">
            <MousePointer2 size={16} />
            Available for Java backend opportunities
          </div>
          <p className="text-xl font-semibold text-slate-300 light:text-slate-600">Hi, I'm</p>
          <h1 className="mt-3 text-5xl font-black leading-tight tracking-tight text-white light:text-slate-950 sm:text-7xl">
            {profile.name.split(' ')[0]} <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="mt-5 flex min-h-12 items-center text-2xl font-extrabold text-accent sm:text-3xl">
            <span>{typedText}</span>
            <span className="ml-1 h-8 w-0.5 animate-pulse bg-accent" />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-600">{profile.headline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.resume}
              download
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3.5 text-sm font-black text-white shadow-glow transition hover:scale-105"
            >
              <Download size={18} />
              Download Resume
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-black text-white transition hover:border-accent/60 hover:bg-accent/10 light:border-slate-200 light:bg-white light:text-slate-950"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:-translate-y-1 hover:border-accent/60 hover:text-accent light:border-slate-200 light:bg-white light:text-slate-800"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-40 blur-3xl" />
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-2 shadow-glow"
          >
            <div className="rounded-full bg-slate-950 p-3">
              <img
                src={profile.image}
                alt={`${profile.name} professional profile`}
                className="aspect-square w-full rounded-full object-cover object-top"
                loading="eager"
              />
            </div>
          </motion.div>
          <div className="glass absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-3xl p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {awards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-2 text-xs font-semibold text-slate-200 light:text-slate-700">
                    <Icon size={18} className="shrink-0 text-accent" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section-shell absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="grid grid-cols-4 gap-3">
          {highlights.map((highlight) => (
            <div key={highlight} className="glass rounded-2xl px-4 py-3 text-sm text-slate-300 light:text-slate-700">
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
