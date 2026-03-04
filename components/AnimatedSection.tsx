'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedSectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function AnimatedSection({ id, className = '', children }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 70, scale: 0.98, filter: 'blur(6px)' }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
