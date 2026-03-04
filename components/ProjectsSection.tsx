'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import { AnimatedSection } from './AnimatedSection';
import { PrimaryButton } from './PrimaryButton';

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Case Studies</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">Production-Focused Projects</h2>
          <p className="mt-4 text-white/70">
            Real-world systems with admin control, business workflow structure, and scalable architecture.
          </p>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent"
            >
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8 lg:p-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Project 0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{project.description}</p>
                  <p className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7">
                    <PrimaryButton href={project.link} external variant="outline">
                      Visit Live Project
                      <span className="ml-2 inline-flex">
                        <ArrowUpRight size={16} />
                      </span>
                    </PrimaryButton>
                  </div>
                </div>
                <div className="border-l border-white/10 bg-black/25 p-8 lg:p-10">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Key Features</h4>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/45">{metric.label}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
