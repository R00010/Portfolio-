'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, FolderOpenDot } from 'lucide-react';
import { heroHighlights } from '@/data/content';
import { PrimaryButton } from './PrimaryButton';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-40 lg:px-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/30 blur-[120px]" />
        <div className="absolute bottom-0 left-16 h-64 w-64 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute right-16 top-24 h-60 w-60 rounded-full bg-cyan-400/20 blur-[130px]" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
            Dark Premium Tech Architect
          </p>
          <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Abdul Rehman
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
              Full Stack Systems Architect
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Full stack engineer building admin controlled platforms, pharmacy systems, farm inventory
            solutions, and service booking infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton href="#" variant="solid">
              <span className="mr-2 inline-flex">
                <Download size={16} />
              </span>
              Download CV
            </PrimaryButton>
            <PrimaryButton href="#projects" variant="outline">
              <span className="mr-2 inline-flex">
                <FolderOpenDot size={16} />
              </span>
              View Projects
            </PrimaryButton>
            <PrimaryButton href="#contact" variant="ghost">
              Let&apos;s Build Something
              <span className="ml-2 inline-flex">
                <ArrowRight size={16} />
              </span>
            </PrimaryButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-premium backdrop-blur-sm"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-white/60">Strategic Highlights</h3>
          <ul className="mt-5 space-y-4">
            {heroHighlights.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/80"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
