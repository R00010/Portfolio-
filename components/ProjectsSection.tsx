'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import { AnimatedSection } from './AnimatedSection';
import { PrimaryButton } from './PrimaryButton';

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Case Studies</p>
          <h2 className="text-3xl font-black text-black md:text-5xl">Production Projects</h2>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="overflow-hidden rounded-3xl border border-black/12 bg-white"
            >
              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8 lg:p-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-black/60">Project 0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-bold text-black">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-black/70">{project.description}</p>
                  <p className="mt-5 rounded-2xl border border-black/10 bg-black/[0.02] p-4 text-sm text-black/75">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-black/20 bg-black/[0.03] px-3 py-1 text-xs text-black/80">{item}</span>
                    ))}
                  </div>
                  <div className="mt-7">
                    <PrimaryButton href={project.link} external variant="outline">
                      Visit Live Project<span className="ml-2 inline-flex"><ArrowUpRight size={16} /></span>
                    </PrimaryButton>
                  </div>
                </div>
                <div className="border-l border-black/10 bg-black/[0.02] p-8 lg:p-10">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-black/55">Key Features</h4>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
