"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextRotatorProps {
  texts: string[];
}

export default function TextRotator({ texts }: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative h-[1.2em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute left-0 text-secondary"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
