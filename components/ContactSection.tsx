'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="px-6 pb-24 pt-20 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-[2rem] border border-black/12 bg-black/[0.02] p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Contact</p>
          <h2 className="text-3xl font-black text-black md:text-5xl">Let&apos;s Build Your Next Platform</h2>
          <p className="mt-5 max-w-xl text-black/70">
            Need a scalable service platform, admin-controlled workflow system, or automation-ready web app?
            Let’s discuss your project.
          </p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <label className="block text-sm text-black/70">
            Name
            <input type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-black focus:outline-none" />
          </label>
          <label className="block text-sm text-black/70">
            Email
            <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-black focus:outline-none" />
          </label>
          <label className="block text-sm text-black/70">
            Project Details
            <textarea rows={6} placeholder="Describe your platform, workflows, and goals..." className="mt-2 w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:border-black focus:outline-none" />
          </label>
          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-black/90"
          >
            Submit Inquiry
          </motion.button>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
