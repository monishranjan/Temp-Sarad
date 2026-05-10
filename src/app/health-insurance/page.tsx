"use client";

import { healthPlans } from '@/data/healthPlans';
import PlanCard from '@/components/PlanCard';
import ComparisonTable from '@/components/ComparisonTable';
import { ShieldCheck, Heart, Globe, Award, ArrowRight, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HealthInsurancePage() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col gap-24 pb-32 bg-bg-main">
      {/* Editorial Hero Cover Section */}
      <section className="relative mx-4 md:mx-8 lg:mx-16 mt-2 mb-4 rounded-[32px] md:rounded-[56px] py-16 md:py-32 px-6 md:px-16 overflow-hidden bg-primary text-white shadow-2xl border border-secondary/10">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="lg:col-span-8 space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/20 bg-secondary/10 text-xs font-bold tracking-widest uppercase text-secondary backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,210,135,0.8)]" /> Medical Protection
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-display-large text-white leading-none tracking-tight">
              Best <span className="text-secondary">Mediclaim </span> <br /> <span className="text-secondary">Policies </span>For<br /> Your Family.
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-4 pb-4 lg:pb-8"
          >
            <p className="text-xl text-white/70 font-light leading-relaxed mb-10 max-w-md">
              We have compared over 50+ policies to bring you the top 3 health insurance plans in India. Honest advice, zero hidden terms.
            </p>
            <button className="flex items-center gap-5 group">
              <span className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary-light transition-all shadow-[0_0_20px_rgba(0,210,135,0.3)] group-hover:scale-105">
                <ArrowRight className="w-6 h-6 text-primary transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-bold text-white uppercase tracking-widest text-sm group-hover:text-secondary transition-colors">Compare Plans</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid - Trust & Features */}
      <section className="container">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Main Bento */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-primary rounded-3xl p-10 text-white flex flex-col justify-between relative overflow-hidden group border border-secondary/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-bl from-secondary/40 to-transparent rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -ml-20 -mb-20" />
            <ShieldCheck className="w-12 h-12 text-secondary mb-16 relative z-10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">100% Claim Settlement Support</h3>
              <p className="text-white/80 max-w-md text-lg">We help you at the time of hospital admission and ensure your claims are settled without hassle.</p>
            </div>
          </motion.div>

          {/* Side Bento 1 */}
          <motion.div variants={fadeUp} className="card-fintech p-8 flex flex-col justify-between bg-linear-to-br from-white to-accent/5 border-accent/10 hover:-translate-y-1 transition-transform">
            <Globe className="w-10 h-10 text-accent mb-8" />
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Global Reach</h3>
              <p className="text-text-muted text-sm">Seamless international coverage options for global citizens.</p>
            </div>
          </motion.div>

          {/* Side Bento 2 */}
          <motion.div variants={fadeUp} className="card-fintech p-8 flex flex-col justify-between bg-linear-to-br from-white to-secondary/5 border-secondary/10 hover:-translate-y-1 transition-transform">
            <Heart className="w-10 h-10 text-secondary mb-8" />
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Maternity & Day Care</h3>
              <p className="text-text-muted text-sm">Covers maternity expenses, day care treatments, and pre-existing diseases.</p>
            </div>
          </motion.div>

          {/* Bottom Banner Bento */}
          <motion.div variants={fadeUp} className="md:col-span-2 card-fintech p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-linear-to-r from-bg-alt via-white to-secondary/10 border-primary/5">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-primary/5 flex items-center justify-center">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">15+ Years Experience <Star className="w-4 h-4 fill-secondary text-secondary" /></h3>
                <p className="text-text-muted text-sm">Trusted by 500+ families across India.</p>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-8 rounded-full bg-secondary/30" />)}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Plans Section */}
      <section className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-widest uppercase text-xs mb-4">
              <Zap className="w-4 h-4" /> Recommended Portfolios
            </div>
            <h2 className="text-display text-primary leading-tight tracking-tight mb-4">Top 3 Health Plans.</h2>
            <p className="text-xl text-text-muted font-light">These are the highest rated policies this year. Choose the one that fits your budget and needs.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {healthPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-display text-primary leading-tight tracking-tight mb-4">Compare Features.</h2>
          <p className="text-xl text-text-muted font-light">See the difference in room rent limits, waiting periods, and bonus features.</p>
        </div>
        <ComparisonTable />
      </section>
    </div>
  );
}
