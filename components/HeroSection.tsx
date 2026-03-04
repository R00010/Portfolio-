'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, FolderOpenDot } from 'lucide-react';
import { heroHighlights } from '@/data/content';
import { PrimaryButton } from './PrimaryButton';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-40 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <p className="mb-5 inline-flex rounded-full border border-black/20 bg-black/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-black/80">
            BOSS · Software Engineer / Web Developer
          </p>
          <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
            Abdul Rehman
            <span className="mt-2 block text-3xl font-semibold text-black/80 md:text-5xl">Full Stack Systems Architect</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
            Full stack engineer building admin controlled platforms, pharmacy systems, farm inventory
            solutions, and service booking infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton href="/cv/Abdul-Rehman-Shahid-CV.html" variant="solid" download>
              <span className="mr-2 inline-flex"><Download size={16} /></span>Download CV
            </PrimaryButton>
            <PrimaryButton href="#projects" variant="outline">
              <span className="mr-2 inline-flex"><FolderOpenDot size={16} /></span>View Projects
            </PrimaryButton>
            <PrimaryButton href="#contact" variant="ghost">
              Let&apos;s Build Something<span className="ml-2 inline-flex"><ArrowRight size={16} /></span>
            </PrimaryButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="rounded-3xl border border-black/15 bg-black/[0.02] p-6"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-black/60">Strategic Highlights</h3>
          <ul className="mt-5 space-y-4">
            {heroHighlights.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-black/80"
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
