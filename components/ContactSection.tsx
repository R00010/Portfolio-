'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="px-6 pb-24 pt-24 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.08] to-transparent p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Contact</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">Let&apos;s Build Your Next Platform</h2>
          <p className="mt-5 max-w-xl text-white/70">
            If you need a scalable service platform, an admin controlled workflow system, or an automation-ready
            product, I can help architect and build it from planning to deployment.
          </p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <label className="block text-sm text-white/70">
            Name
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-blue-300 focus:outline-none"
            />
          </label>
          <label className="block text-sm text-white/70">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-blue-300 focus:outline-none"
            />
          </label>
          <label className="block text-sm text-white/70">
            Project Details
            <textarea
              rows={6}
              placeholder="Describe your platform, workflows, and goals..."
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-blue-300 focus:outline-none"
            />
          </label>
          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white/90"
          >
            Submit Inquiry
          </motion.button>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
