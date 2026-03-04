'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/content';
import { AnimatedSection } from './AnimatedSection';

export function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">Testimonials</p>
          <h2 className="text-3xl font-black text-black md:text-5xl">Client & Team Feedback</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-black/10 bg-black/[0.02] p-6"
            >
              <p className="text-sm leading-relaxed text-black/80">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-black/10 pt-4">
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-black/55">{testimonial.role} · {testimonial.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
