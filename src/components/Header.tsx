"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Health Insurance', href: '/health-insurance' },
    { name: 'About Me', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 z-100 w-[calc(100%-2rem)] max-w-6xl"
    >
      <nav className="card-fintech px-6 md:px-8 py-3.5 flex items-center justify-between shadow-modern">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
          Sarad<span className="text-secondary">Chaudhary</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-colors py-1 text-sm tracking-wide ${isActive ? 'text-primary border-b-2 border-primary font-bold' : 'text-text-muted hover:text-primary'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link href="/contact" className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-secondary hover:shadow-[0_4px_12px_rgba(0,210,135,0.4)] transition-all shadow-sm">
          Get Advisory
        </Link>

        {/* Mobile Menu Toggle (Placeholder for future) */}
        <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-bg-alt rounded-lg">
          <div className="w-5 h-0.5 bg-primary rounded-full" />
          <div className="w-5 h-0.5 bg-primary rounded-full" />
          <div className="w-5 h-0.5 bg-primary rounded-full" />
        </button>
      </nav>
    </motion.header>
  );
}


