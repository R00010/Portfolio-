'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  external?: boolean;
  download?: boolean;
};

export function PrimaryButton({ href, children, variant = 'solid', external = false, download = false }: PrimaryButtonProps) {
  const [pressed, setPressed] = useState(false);

  const classes = {
    solid: 'bg-black text-white hover:bg-black/90 border-black shadow-md',
    outline: 'bg-transparent text-black border-black/60 hover:bg-black hover:text-white',
    ghost: 'bg-black/5 text-black border-black/20 hover:bg-black/10'
  };

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      animate={{ y: pressed ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
      onTapStart={() => setPressed(true)}
      onTapCancel={() => setPressed(false)}
      onTap={() => setPressed(false)}
    >
      <Link
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noreferrer' : undefined}
        download={download}
        className={`inline-flex cursor-pointer items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${classes[variant]}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
