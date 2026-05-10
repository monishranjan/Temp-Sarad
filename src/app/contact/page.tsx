"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-bg-main min-h-screen pb-32">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-display text-primary mb-6">Let&apos;s Start a <span className="text-secondary">Conversation</span>.</h1>
            <p className="text-xl text-text-muted font-light leading-relaxed">
              Have questions about a policy or need a personalized quote? I&apos;m here to provide expert guidance tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          
          {/* Contact Info Sidebar */}
          <motion.div 
            initial="hidden" animate="visible" variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="card-fintech p-8 space-y-6">
              <h3 className="text-xl font-bold text-primary">Contact Details</h3>
              <div className="space-y-6">
                <a href="tel:9435340320" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5 text-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Call Anytime</p>
                    <p className="text-lg font-bold text-primary">+91 94353 40320</p>
                    <p className="text-sm text-text-muted">+91 88110 97996</p>
                  </div>
                </a>

                <a href="mailto:saradchaudhury123@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-bold text-primary">saradchaudhury123@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Base Location</p>
                    <p className="text-lg font-bold text-primary">Guwahati, Assam</p>
                    <p className="text-sm text-text-muted">Serving clients across India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="card-fintech p-8 bg-primary text-white border-none shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-secondary" />
                <h4 className="font-bold">Consultation Hours</h4>
              </div>
              <div className="space-y-3 opacity-80 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-secondary font-bold">On Call Only</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Component */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
