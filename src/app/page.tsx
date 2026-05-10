"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, TrendingUp, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

import TextRotator from '@/components/TextRotator';

import ContactForm from '@/components/ContactForm';
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
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
    <div className="flex flex-col gap-32 pb-32 overflow-hidden bg-bg-main relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-linear-to-bl from-primary/5 via-secondary/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      
      {/* Modern Hero Section */}
      <section className="container pt-2 lg:pt-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="space-y-8 z-10"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/10 bg-white/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase text-primary">Trusted Insurance Advisor</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-display-large text-primary leading-[0.95]">
              Sarad <br/>
              <span className="text-secondary">Chaudhary</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary/80">
              Your Partner for <br className="md:hidden" />
              <TextRotator texts={["Trusted Advice.", "Hassle-free Claims.", "25+ Years Experience.", "Personalized Support."]} />
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-xl text-text-muted max-w-xl leading-relaxed font-light">
              I help you choose the right insurance to protect your family and your savings. Get honest, expert advice to secure your future without any hidden terms.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 pt-4">
              <Link href="/health-insurance" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:px-10 overflow-hidden shadow-lg">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b from-transparent via-transparent to-black" />
                <span className="relative flex items-center gap-2">
                  Explore Plans <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-primary transition-all duration-300 rounded-full hover:bg-primary/5">
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-4/5 lg:aspect-3/4 rounded-3xl overflow-hidden shadow-modern"
          >
             <HeroCarousel />
          </motion.div>
        </div>
      </section>

      {/* About Me Quick Section */}
      <section className="container">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="relative z-10 card-fintech overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
               <Image 
                src="/images/sarad_image.png" 
                alt="Sarad Kumar Chaudhary Profile" 
                width={500}
                height={500}
                className="object-cover rounded-2xl transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-modern p-8 rounded-2xl shadow-xl z-20">
              <div className="text-4xl font-black text-primary mb-1">25+</div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-widest">Years Experience</div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={fadeUp}>
              <h2 className="text-display text-primary mb-6">Expertise Built Over Decades.</h2>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                Based in <span className="font-semibold text-primary">Guwahati, Assam</span>, I have dedicated over 25 years to the insurance industry. My mission is simple: to provide transparent, reliable, and hassle-free insurance solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">90%</div>
                <p className="text-sm text-text-muted font-medium">Claim Settlement Ratio achieved for my clients across India.</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">Crores</div>
                <p className="text-sm text-text-muted font-medium">Worth of claims facilitated and approved hassle-free.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg">
                Read Full Biography <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Section - Asymmetric Grid */}
      <section className="container pt-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="flex flex-col gap-16"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <h2 className="text-display text-primary mb-6">My Services.</h2>
            <p className="text-xl text-text-muted">Expert advice on the best insurance and investment plans for you and your family.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="group cursor-pointer">
              <Link href="/health-insurance" className="block h-full">
                <div className="h-full p-10 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow-modern transition-all duration-500 flex flex-col hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 relative z-10">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Health Insurance</h3>
                  <p className="text-text-muted mb-8 growtive z-10">Get the best cashless mediclaim policies covering hospitalization, day care, and maternity.</p>
                  
                  <div className="mt-auto flex items-center justify-between text-primary font-bold relative z-10">
                    <span>View Plans</span>
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeUp} className="h-full p-10 rounded-3xl bg-bg-alt border border-primary/5 flex flex-col relative overflow-hidden opacity-80">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Life Insurance</h3>
              <p className="text-text-muted mb-8 grow">Secure your family&lsquo;s financial future with the best Term Insurance and savings plans.</p>
              <div className="mt-auto inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm w-fit">
                Coming Soon
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="h-full p-10 rounded-3xl bg-bg-alt border border-primary/5 flex flex-col relative overflow-hidden opacity-80 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-8">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Investment Planning</h3>
              <p className="text-text-muted mb-8 grow">Grow your wealth safely with expert guidance on mutual funds and retirement planning.</p>
              <div className="mt-auto inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm w-fit">
                Coming Soon
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modern Banner */}
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-primary text-white p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-br from-secondary/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 max-w-2xl space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Compare the Best <br/> Health Insurance Plans.
            </h2>
            <p className="text-xl text-white/70 font-light">
              We have shortlisted the top 3 mediclaim policies in India. Compare their benefits, cashless hospital networks, and claim ratios.
            </p>
          </div>
          
          <div className="relative z-10">
            <Link href="/health-insurance" className="inline-flex items-center justify-center px-10 py-5 font-bold text-primary bg-white rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
              Start Comparing
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Contact Section on Homepage */}
      <section className="container bg-bg-alt/50 py-24 rounded-[40px] border border-primary/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-display text-primary leading-tight">Get a Personalized <br/> <span className="text-secondary">Insurance Quote</span>.</h2>
              <p className="text-xl text-text-muted font-light leading-relaxed">
                Not sure which plan is right for you? Fill out the form and I will personally analyze your needs to provide the best recommendation.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-bold text-primary">Free Analysis</h4>
                <p className="text-sm text-text-muted">Comprehensive review of your current health and financial goals.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-primary">Zero Commitment</h4>
                <p className="text-sm text-text-muted">Expert advice with no obligation to buy. Your trust is my priority.</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
