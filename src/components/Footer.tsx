"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Sarad<span className="text-secondary">Chaudhary</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-light max-w-xs">
              Empowering families across India with transparent, reliable, and expert insurance advisory for over 25 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/health-insurance" className="text-white/70 hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li className="flex items-center gap-2 text-white/40 text-xs mt-8">
                <Shield className="w-3 h-3" /> Licensed Advisor
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-white/70">
                  <p>+91 94353 40320</p>
                  <p>+91 88110 97996</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:saradchaudhury123@gmail.com" className="text-white/70 hover:text-white break-all">saradchaudhury123@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <p className="text-white/70 leading-relaxed">Guwahati, Assam, <br />India - 781001</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} Sarad Chaudhary. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <span className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
