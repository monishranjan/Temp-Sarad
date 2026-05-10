"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: '/hero/family.png',
    alt: 'Happy Family Security',
    quote: '"The best investment is securing what you already have."'
  },
  {
    src: '/hero/medical.png',
    alt: 'Premium Medical Care',
    quote: '"World-class healthcare coverage for your peace of mind."'
  },
  {
    src: '/hero/advisory.png',
    alt: 'Expert Insurance Advisory',
    quote: '"Honest advice built on 25 years of professional trust."'
  },
  {
    src: '/hero/protection.png',
    alt: 'Modern Digital Protection',
    quote: '"Future-ready insurance solutions for a changing world."'
  }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
          
          {/* Floating Glass Element */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-8 left-8 right-8 p-6 glass-modern rounded-2xl"
          >
            <p className="text-white font-medium italic">{images[index].quote}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute top-6 right-6 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-secondary shadow-[0_0_10px_rgba(0,210,135,0.8)]' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
