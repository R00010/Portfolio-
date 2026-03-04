'use client';

import { motion } from 'framer-motion';
import { expertiseItems } from '@/data/content';
import { AnimatedSection } from './AnimatedSection';

export function ExpertiseSection() {
  return (
    <AnimatedSection id="expertise" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/70">Core Expertise</p>
          <h2 className="text-3xl font-black text-black md:text-5xl">Architecture Skills With Operational Focus</h2>
          <p className="mt-4 text-black/70">
            Built around maintainability, governance, and production-grade deployment patterns.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {expertiseItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl border border-black/10 bg-white p-7 shadow-lg shadow-black/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <span className="text-sm font-semibold text-black/70">{item.level}%</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-black/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.08 }}
                  className="h-full rounded-full bg-black"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-black/70">{item.blurb}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
