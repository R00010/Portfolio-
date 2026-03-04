'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const workflow = [
  { step: '01', title: 'Discovery & System Mapping', description: 'Understand users, roles, workflows, and pain points before implementation.' },
  { step: '02', title: 'Architecture Blueprint', description: 'Plan scalable modules, data flow, permissions, and dashboard structure.' },
  { step: '03', title: 'Implementation & Automation', description: 'Build full-stack features with automated actions and clear admin controls.' },
  { step: '04', title: 'Deployment & Optimization', description: 'Deploy, monitor, and iterate for reliability and performance.' }
];

export function ProcessSection() {
  return (
    <AnimatedSection id="process" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Delivery Workflow</p>
          <h2 className="text-3xl font-black text-black md:text-5xl">How I Build Systems That Scale</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {workflow.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Step {item.step}</p>
              <h3 className="mt-2 text-xl font-bold text-black">{item.title}</h3>
              <p className="mt-3 text-sm text-black/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
