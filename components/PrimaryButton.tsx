'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  external?: boolean;
  download?: boolean;
};

export function PrimaryButton({ href, children, variant = 'solid', external = false, download = false }: PrimaryButtonProps) {
  const classes = {
    solid:
      'bg-white text-black hover:bg-slate-100 border-white shadow-premium hover:shadow-glow',
    outline:
      'bg-transparent text-white border-white/60 hover:bg-white hover:text-black',
    ghost: 'bg-white/10 text-white border-white/20 hover:bg-white/20'
  };

  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
      <Link
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noreferrer' : undefined}
        download={download}
        className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${classes[variant]}`}
      >
        <span className="bg-gradient-to-r from-current via-current to-current bg-[length:200%_100%] [background-position:0_0] transition-all duration-500 hover:[background-position:100%_0]">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
