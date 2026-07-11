import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const links = (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-900/5 light:hover:text-slate-950"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/68 py-3 shadow-2xl shadow-slate-950/20 backdrop-blur-xl light:bg-white/78' : 'py-5'
      }`}
    >
      <nav className="section-shell flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-base font-black text-white shadow-glow">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.2em] text-white light:text-slate-950 sm:block">
            Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">{links}</div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="focus-ring hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:scale-105 sm:flex"
          >
            <Download size={17} />
            Resume
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden light:border-slate-200 light:bg-white light:text-slate-900"
            aria-label="Open navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="section-shell mt-4 rounded-3xl border border-white/10 bg-slate-950/92 p-4 shadow-2xl backdrop-blur-xl light:border-slate-200 light:bg-white/95 lg:hidden"
          >
            <div className="grid gap-1">{links}</div>
            <a
              href={profile.resume}
              download
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-bold text-white"
            >
              <Download size={17} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
