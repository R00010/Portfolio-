'use client';

import { motion } from 'framer-motion';
import { Bot, Network, Palette, ShieldCheck } from 'lucide-react';
import { services } from '@/data/content';
import { AnimatedSection } from './AnimatedSection';

const iconMap = { ShieldCheck, Bot, Network, Palette };

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Services</p>
          <h2 className="text-3xl font-black text-black md:text-5xl">What I Architect & Deliver</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-black/10 bg-black/[0.02] p-7"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-black/15 bg-white p-3 text-black"><Icon size={20} /></div>
                <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-black/75 before:mr-2 before:text-black before:content-['▹']">{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
