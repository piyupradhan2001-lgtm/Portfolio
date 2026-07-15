import { ArrowUp } from 'lucide-react';
import React from 'react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10 light:border-slate-200">
      <div className="section-shell flex flex-col items-center gap-6 text-center">
        <div>
          <a href="#home" className="inline-flex items-center justify-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-base font-black text-white">
              {profile.initials}
            </span>
            <span>
              <span className="block font-black text-white light:text-slate-950">{profile.name}</span>
              <span className="text-sm text-slate-400 light:text-slate-600">{profile.role}</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-slate-400 light:text-slate-600">
            Copyright &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
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
