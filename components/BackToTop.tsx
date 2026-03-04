'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 450);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={14} /> Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
