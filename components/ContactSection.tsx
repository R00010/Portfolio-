'use client';

import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="px-6 pb-24 pt-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-black/12 bg-black/[0.02] p-8 md:p-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Contact</p>
        <h2 className="text-3xl font-black text-black md:text-5xl">Let&apos;s Build Your Next Platform</h2>
        <p className="mt-5 max-w-3xl text-black/70">
          Need a scalable service platform, admin-controlled workflow system, or automation-ready web app?
          Reach me directly through email or GitHub.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <motion.a
            href="mailto:rehman.ali11900@gmail.com"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 rounded-2xl border border-black/15 bg-white p-5 text-black"
          >
            <Mail size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/55">Email</p>
              <p className="font-semibold">rehman.ali11900@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/R00010"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.94, rotate: -2 }}
            className="flex items-center gap-3 rounded-2xl border border-black/15 bg-white p-5 text-black"
          >
            <Github size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/55">GitHub</p>
              <p className="font-semibold">github.com/R00010</p>
            </div>
          </motion.a>
        </div>
      </div>
    </AnimatedSection>
  );
}
