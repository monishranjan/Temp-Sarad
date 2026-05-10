"use client";

import { use } from 'react';
import { healthPlans } from '@/data/healthPlans';
import { ArrowLeft, CheckCircle2, Shield, Clock, HeartPulse, Sparkles, Download, ArrowRight, UserCheck, Users, MapPin, Zap, Info, Percent, ShieldPlus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PlanDetailsPage({ params }: { params: Promise<{ planId: string }> }) {
  const { planId } = use(params);
  const plan = healthPlans.find(p => p.id === planId);

  if (!plan) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'coverage', label: 'Core Coverage' },
    { id: 'features', label: 'Features & Benefits' },
    { id: 'addons', label: 'Optional Add-ons' }
  ];

  const themeStyles = {
    'activ-one-max': {
      '--color-primary': '#450a0a', // Deep Red
      '--color-primary-light': '#7f1d1d',
      '--color-secondary': '#ef4444', // Vibrant Red
      '--color-secondary-dark': '#dc2626',
      '--color-accent': '#f43f5e', // Rose
    },
    'care-supreme': {
      '--color-primary': '#064e3b', // Deep Aqua Green
      '--color-primary-light': '#047857',
      '--color-secondary': '#10b981', // Aqua Emerald
      '--color-secondary-dark': '#059669',
      '--color-accent': '#14b8a6', // Teal
    },
    'medicare-premier': {
      '--color-primary': '#0a1128', // Deep Navy Blue
      '--color-primary-light': '#1e3a8a',
      '--color-secondary': '#3b82f6', // Bright Blue
      '--color-secondary-dark': '#2563eb',
      '--color-accent': '#0ea5e9', // Sky Blue
    }
  } as Record<string, React.CSSProperties>;

  const currentTheme = themeStyles[planId] || themeStyles['medicare-premier'];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const brochureMapping: Record<string, string> = {
    'activ-one-max': '/brochures/aditya_birla_capital.pdf',
    'care-supreme': '/brochures/care_health_insurance.pdf',
    'medicare-premier': '/brochures/tata_aig_medicare_premier_brochure.pdf'
  };

  const brochureUrl = brochureMapping[planId];

  return (
    <div className="bg-bg-main min-h-screen pb-32" style={currentTheme}>
      
      {/* Modern Hero Cover Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-4 md:mx-8 lg:mx-16 mt-2 rounded-[32px] md:rounded-[56px] py-16 md:py-20 overflow-hidden bg-primary text-white border-b border-secondary/20 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-150 h-150 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        
        <div className="container relative z-10">
          <Link href="/health-insurance" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold transition-colors text-sm uppercase tracking-widest mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to All Plans
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/20 bg-secondary/10 text-xs font-bold tracking-widest uppercase text-secondary backdrop-blur-md">
                Premium Health Plan
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">{plan.name}</motion.h1>
              <motion.p variants={fadeUp} className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-xl">{plan.tagline}</motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="px-8 py-4 rounded-xl font-bold text-primary bg-secondary hover:bg-secondary-light transition-colors shadow-[0_0_20px_rgba(0,210,135,0.2)] flex items-center gap-2 hover:scale-105">
                  Buy Policy Now <ArrowRight className="w-4 h-4" />
                </Link>
                {brochureUrl && (
                  <a 
                    href={brochureUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-md"
                  >
                    <Download className="w-4 h-4" /> Brochure
                  </a>
                )}
              </motion.div>
            </motion.div>
            
            <div className="relative w-full aspect-video lg:aspect-square max-w-lg mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image 
                src={plan.image} 
                alt={plan.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex justify-between items-center shadow-lg">
                  <div>
                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mb-1">Max Coverage</p>
                    <p className="text-xl font-black text-white">{plan.sumInsured.split(' ')[0]}</p>
                  </div>
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container pt-16">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20">
          
          {/* Left Column: Sticky Nav Sidebar */}
          <div className="lg:col-span-3 relative hidden lg:block">
            <div className="sticky top-32">
              <div className="card-fintech p-6">
                <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4 px-4">Navigation</h4>
                <nav className="space-y-1">
                  {navItems.map(item => (
                    <button 
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-text-muted hover:bg-secondary/5 hover:text-primary hover:font-bold transition-all"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Dive Data */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* OVERVIEW SECTION */}
            <motion.section 
              id="overview" className="scroll-mt-32"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="card-fintech p-6 bg-linear-to-brrom-white to-secondary/5 border-secondary/10">
                  <Shield className="w-6 h-6 text-secondary mb-3" />
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">Coverage limits</p>
                  <p className="text-xl font-black text-primary">{plan.sumInsured}</p>
                </div>
                <div className="card-fintech p-6 bg-linear-to-br from-white to-accent/5 border-accent/10">
                  <Clock className="w-6 h-6 text-accent mb-3" />
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">Wait Period</p>
                  <p className="text-xl font-black text-primary">{plan.waitingPeriods.initial}</p>
                </div>
                <div className="card-fintech p-6 bg-primary text-white border-none shadow-fintech">
                  <HeartPulse className="w-6 h-6 text-secondary mb-3" />
                  <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mb-1">Pre/Post Hosp</p>
                  <p className="text-xl font-black text-white">{plan.prePostHosp.split('/')[0]}</p>
                </div>
              </motion.div>
            </motion.section>

            {/* ELIGIBILITY SECTION */}
            <motion.section 
              id="eligibility" className="scroll-mt-32"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-primary tracking-tight">Eligibility Criteria</h2>
              </motion.div>
              
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card-fintech p-6 border-l-4 border-l-accent">
                  <h4 className="font-bold text-primary mb-3">Entry Ages</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-text-muted flex justify-between"><span className="font-medium text-primary">Adult:</span> {plan.eligibility.entryAgeAdult}</p>
                    <p className="text-sm text-text-muted flex justify-between"><span className="font-medium text-primary">Child:</span> {plan.eligibility.entryAgeChild}</p>
                    <p className="text-sm text-text-muted flex justify-between"><span className="font-medium text-primary">Exit:</span> {plan.eligibility.exitAge}</p>
                  </div>
                </div>
                <div className="card-fintech p-6 border-l-4 border-l-secondary">
                  <h4 className="font-bold text-primary mb-3">Policy Structure</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-text-muted"><span className="font-medium text-primary block mb-1">Cover Type:</span> {plan.eligibility.coverType}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mt-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest">
                      Tenure: {plan.eligibility.tenure}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="card-fintech p-6 md:p-8 bg-linear-to-br from-white to-primary/5">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" /> Relationships Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {plan.relationshipsCovered.map((rel, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-white shadow-sm text-sm font-semibold text-primary border border-primary/5">
                      {rel}
                    </span>
                  ))}
                </div>
              </div>

              {plan.eligibility.zones && (
                <div className="mt-4 card-fintech p-6 flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Coverage Zones</h4>
                    <ul className="text-sm text-text-muted space-y-2">
                      {plan.eligibility.zones.map((zone, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/50" /> {zone}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.section>

            {/* CORE COVERAGE SECTION */}
            <motion.section 
              id="coverage" className="scroll-mt-32 pt-8 border-t border-primary/10"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-primary mb-8 tracking-tight">Core Coverage</motion.h2>
              <motion.div variants={fadeUp} className="card-fintech divide-y divide-primary/5">
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 hover:bg-secondary/5 transition-colors">
                  <div className="md:w-1/3 text-sm font-bold tracking-widest uppercase text-text-muted">Hospitalization</div>
                  <div className="md:w-2/3 text-primary font-medium">{plan.hospitalization}</div>
                </div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 hover:bg-secondary/5 transition-colors">
                  <div className="md:w-1/3 text-sm font-bold tracking-widest uppercase text-text-muted">Day Care</div>
                  <div className="md:w-2/3 text-primary font-medium">{plan.modernDayCare}</div>
                </div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 hover:bg-secondary/5 transition-colors">
                  <div className="md:w-1/3 text-sm font-bold tracking-widest uppercase text-text-muted">Pre/Post Hosp..</div>
                  <div className="md:w-2/3 text-primary font-medium">{plan.prePostHosp}</div>
                </div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 bg-secondary/10">
                  <div className="md:w-1/3 text-sm font-bold tracking-widest uppercase text-secondary flex items-center gap-2">
                    Restoration <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="md:w-2/3 text-primary font-black">{plan.restoration}</div>
                </div>
                {plan.superCredit && (
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 bg-accent/10">
                    <div className="md:w-1/3 text-sm font-bold tracking-widest uppercase text-accent flex items-center gap-2">
                      Bonus Limit <Zap className="w-4 h-4 text-accent" />
                    </div>
                    <div className="md:w-2/3 text-primary font-black">{plan.superCredit}</div>
                  </div>
                )}
              </motion.div>
            </motion.section>

            {/* FEATURES SECTION */}
            <motion.section 
              id="features" className="scroll-mt-32 pt-8 border-t border-primary/10"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-primary mb-8 tracking-tight">Features & Wait Periods</motion.h2>
              
              <motion.div variants={fadeUp} className="space-y-3 mb-12">
                {plan.specialFeatures.map((feature, idx) => (
                  <div key={idx} className="card-fintech p-6 flex gap-4 items-start border-l-4 border-l-secondary hover:translate-x-1 transition-transform">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <p className="text-primary font-medium leading-relaxed">{feature}</p>
                  </div>
                ))}
              </motion.div>

              <motion.h3 variants={fadeUp} className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" /> Wait Periods
              </motion.h3>
              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="card-fintech p-6 bg-linear-to-br from-white to-primary/5">
                  <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Initial Wait</h4>
                  <p className="text-xl font-black text-primary">{plan.waitingPeriods.initial}</p>
                </div>
                <div className="card-fintech p-6 bg-linear-to-br from-white to-accent/5">
                  <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Specific Diseases</h4>
                  <p className="text-xl font-black text-primary">{plan.waitingPeriods.specific || "Not Specified"}</p>
                </div>
                <div className="card-fintech p-6 bg-linear-to-br from-white to-secondary/5">
                  <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Pre-Existing (PED)</h4>
                  <p className="text-xl font-black text-primary">{plan.waitingPeriods.ped}</p>
                </div>
                {plan.waitingPeriods.maternity && (
                  <div className="card-fintech p-6 md:col-span-3 bg-primary text-white border-none shadow-md">
                    <h4 className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Maternity Wait Period</h4>
                    <p className="text-xl font-black text-white">{plan.waitingPeriods.maternity}</p>
                  </div>
                )}
              </motion.div>
            </motion.section>

            {/* OPTIONAL ADD-ONS & DISCOUNTS */}
            <motion.section 
              id="addons" className="scroll-mt-32 pt-8 border-t border-primary/10"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            >
              <div className="grid md:grid-cols-2 gap-8">
                
                <motion.div variants={fadeUp} className="card-fintech p-6 md:p-8 bg-linear-to-br from-white to-accent/5 border-accent/20">
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                    <ShieldPlus className="w-6 h-6 text-accent" /> Add-ons
                  </h2>
                  <div className="space-y-4">
                    {plan.optionalBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0 shadow-[0_0_8px_rgba(255,107,107,0.5)]" />
                        <p className="text-sm font-medium text-primary leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="card-fintech p-6 md:p-8 bg-linear-to-br from-white to-secondary/5 border-secondary/20">
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                    <Percent className="w-6 h-6 text-secondary" /> Discounts
                  </h2>
                  <div className="space-y-4">
                    {plan.discounts.map((discount, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,210,135,0.5)]" />
                        <p className="text-sm font-medium text-primary leading-relaxed">{discount}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.section>

            {/* Disclaimers */}
            <div className="pt-16 pb-8 border-t border-primary/10 mt-16">
              <div className="flex items-start gap-3 text-text-muted">
                <Info className="w-5 h-5 shrink-0 mt-0.5 opacity-50" />
                <div className="space-y-2">
                  {plan.disclaimers.map((disc, idx) => (
                    <p key={idx} className="text-xs uppercase tracking-widest opacity-60 font-medium">{disc}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Action Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 flex gap-4">
              <Link href="/contact" className="flex-1 py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-primary-light transition-colors shadow-fintech text-sm flex items-center justify-center">
                Buy Now
              </Link>
              {brochureUrl && (
                <a 
                  href={brochureUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl font-bold text-primary bg-bg-alt hover:bg-primary/5 transition-colors text-sm flex items-center justify-center"
                >
                  Brochure
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
