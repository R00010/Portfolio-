'use client';

import { motion } from 'framer-motion';
import { longFormStory } from '@/data/content';
import { AnimatedSection } from './AnimatedSection';

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="px-6 py-24 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">About</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">
            Self-Taught Engineer, Full-Stack Builder, and Design-Driven Problem Solver
          </h2>
        </div>
        <div className="space-y-5 text-white/75">
          {longFormStory.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
