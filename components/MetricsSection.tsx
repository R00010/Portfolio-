'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { impactStats } from '@/data/content';
import { AnimatedSection } from './AnimatedSection';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 90 });
  const rounded = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  return (
    <AnimatedSection id="impact" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-black/10 bg-black/[0.02] p-8 md:p-12">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Impact Metrics</p>
          <h2 className="text-3xl font-black text-black md:text-5xl">Numbers Backed by Real Systems</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-black/55">{stat.label}</p>
              <p className="mt-4 text-4xl font-black text-black"><Counter value={stat.value} suffix={stat.suffix} /></p>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{stat.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
