import { ArrowUp } from 'lucide-react';
import React from 'react';
import { navLinks, profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10 light:border-slate-200">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-base font-black text-white">
              {profile.initials}
            </span>
            <span>
              <span className="block font-black text-white light:text-slate-950">{profile.name}</span>
              <span className="text-sm text-slate-400 light:text-slate-600">{profile.role}</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-400 light:text-slate-600">
            Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-2 lg:justify-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-400 transition hover:bg-white/10 hover:text-white light:text-slate-600 light:hover:bg-slate-900/5 light:hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:justify-end">
          {profile.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} aria-label={social.label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white transition hover:border-accent hover:text-accent light:border-slate-200 light:text-slate-900">
                <Icon size={19} />
              </a>
            );
          })}
          <a href="#home" aria-label="Back to top" className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 transition hover:scale-105">
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
