import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { contact } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.jsx';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    setForm((value) => ({ ...value, [event.target.name]: event.target.value }));
    setErrors((value) => ({ ...value, [event.target.name]: '' }));
    setSent(false);
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (form.message.trim().length < 12) nextErrors.message = 'Message should be at least 12 characters.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm(initialForm);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something reliable"
          description="Use the form for a quick message, or reach out directly through email or phone."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="text-2xl font-black text-white light:text-slate-950">Contact Information</h3>
            <p className="mt-4 leading-8 text-slate-300 light:text-slate-600">
              Open to Java backend, Spring Boot, and full-stack developer roles.
            </p>
            <div className="mt-8 grid gap-4">
              {contact.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent/50 hover:bg-accent/10 light:border-slate-200 light:bg-white">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white">
                      <Icon size={21} />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-slate-400 light:text-slate-500">{item.label}</span>
                      <span className="font-bold text-white group-hover:text-accent light:text-slate-950">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="glass rounded-3xl p-6"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={updateField} error={errors.name} />
              <Field label="Email" name="email" value={form.email} onChange={updateField} error={errors.email} type="email" />
            </div>
            <Field
              label="Message"
              name="message"
              value={form.message}
              onChange={updateField}
              error={errors.message}
              textarea
            />
            {sent && <p className="mt-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm font-bold text-emerald-200 light:text-emerald-700">Thanks. Your message is ready to be connected to a backend or email service.</p>}
            <button className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-6 py-3.5 text-sm font-black text-white shadow-glow transition hover:scale-105">
              <Send size={18} />
              Submit Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = 'text', textarea = false }) {
  const common = {
    id: name,
    name,
    value,
    onChange,
    placeholder: label,
    className:
      'focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-accent light:border-slate-200 light:bg-white light:text-slate-950'
  };

  return (
    <label className="mt-5 block text-sm font-bold text-slate-200 light:text-slate-700">
      {label}
      {textarea ? <textarea {...common} rows="6" /> : <input {...common} type={type} />}
      {error && <span className="mt-2 block text-xs font-semibold text-rose-300 light:text-rose-600">{error}</span>}
    </label>
  );
}
