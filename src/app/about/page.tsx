"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-bg-main min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-primary/5 to-transparent -z-10" />
        <div className="container">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest">
              25+ Years of Trust
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-display-large text-primary">
              Dedicated to Protecting <br className="hidden md:block" />
              What <span className="text-secondary">Matters Most</span>.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-text-muted leading-relaxed font-light">
              I am Sarad Chaudhary, an experienced insurance advisor based in Guwahati, Assam. My journey in the insurance industry spans over two decades, helping thousands of families secure their futures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Image */}
      <section className="container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-tr from-secondary/20 to-accent/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image 
                  src="/hero_health_insurance.png" 
                  alt="Sarad Chaudhary Portrait" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-modern p-10 rounded-3xl shadow-2xl border border-white/50 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-muted uppercase tracking-widest">Success Rate</div>
                    <div className="text-3xl font-black text-primary">90%</div>
                  </div>
                </div>
                <p className="text-xs text-text-muted font-medium max-w-[180px]">Consistently maintaining a high claim settlement ratio for over 25 years.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-6">
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-primary tracking-tight">Biography & Expertise</motion.h2>
              <motion.div variants={fadeUp} className="prose prose-lg text-text-muted font-light leading-relaxed max-w-none">
                <p>
                  Based in the heart of North East India, Guwahati, I have built my practice on the foundation of transparency and client-first advocacy. Throughout my career, I have worked with top clients across India, ensuring that insurance isn&apos;t just a policy but a robust safety net.
                </p>
                <p>
                  I specialize in facilitating <span className="font-semibold text-primary">hassle-free claims</span>. My extensive network includes tie-ups with almost all major insurance companies in India, which allows me to offer the best possible options tailored to your specific needs.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="card-fintech p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">My Mission</h3>
                <p className="text-text-muted text-sm leading-relaxed">To demystify insurance for common people and ensure that every eligible claim is paid out without unnecessary delays or stress.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="card-fintech p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Client Focus</h3>
                <p className="text-text-muted text-sm leading-relaxed">Whether it&apos;s a small individual policy or a multi-crore corporate insurance, my dedication to service remains unwavering.</p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.h3 variants={fadeUp} className="text-2xl font-bold text-primary">Why Work With Me?</motion.h3>
              <motion.div variants={fadeUp} className="space-y-4">
                {[
                  "Personalized risk assessment for your specific life stage.",
                  "Direct assistance during the claim process—no call center loops.",
                  "Access to exclusive plans from major insurance providers.",
                  "Annual reviews to ensure your coverage stays relevant.",
                  "90% claim success ratio over two decades of practice."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <p className="text-text-muted font-medium">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              variants={fadeUp}
              className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold">Ready to secure your future?</h3>
                <p className="text-white/70 font-light max-w-md">Let&apos;s have a conversation about your protection needs. No pressure, just expert advice.</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/contact" className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-white transition-colors flex items-center gap-2">
                    Get in Touch <MessageSquare className="w-4 h-4" />
                  </Link>
                  <Link href="/health-insurance" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                    Explore Services
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
