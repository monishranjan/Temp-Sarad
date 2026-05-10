"use client";

import Image from 'next/image';
import Link from 'next/link';
import { HealthPlan } from '../data/healthPlans';
import { Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlanCardProps {
  plan: HealthPlan;
  index?: number;
}

export default function PlanCard({ plan, index = 0 }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/health-insurance/${plan.id}`} className="block h-full group">
        <div className="card-fintech flex flex-col h-full overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-primary/5 hover:border-secondary/30">
          
          {/* Top Image Banner */}
          <div className="relative w-full aspect-video overflow-hidden bg-primary">
            <Image 
              src={plan.image} 
              alt={plan.name} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
            
            <div className="absolute top-4 left-4">
               <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white shadow-sm">
                 <ShieldCheck className="w-3.5 h-3.5 text-secondary" /> Top Rated
               </div>
            </div>

            <div className="absolute bottom-4 left-5 right-5">
              <h3 className="text-2xl font-bold text-white leading-tight tracking-tight mb-1">{plan.name}</h3>
              <p className="text-white/70 text-xs line-clamp-1">{plan.tagline}</p>
            </div>
          </div>
          
          {/* Core Stats Row */}
          <div className="grid grid-cols-2 divide-x divide-primary/5 border-b border-primary/5 bg-gradient-to-br from-white to-secondary/5">
            <div className="p-4 md:p-5 flex flex-col justify-center">
              <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">Max Cover</div>
              <div className="text-xl font-black text-primary tracking-tight">{plan.sumInsured.split(' ')[0]}</div>
            </div>
            <div className="p-4 md:p-5 flex flex-col justify-center bg-gradient-to-br from-white to-accent/5">
              <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-accent" /> Wait Period
              </div>
              <div className="text-xl font-black text-primary tracking-tight">{plan.waitingPeriods.initial}</div>
            </div>
          </div>
          
          {/* Features List */}
          <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-secondary rounded-full shadow-[0_0_8px_rgba(0,210,135,0.6)]" /> Key Benefits
            </div>
            <div className="space-y-3 mb-6 flex-grow">
              {plan.specialFeatures.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" strokeWidth={3} />
                  <span className="text-sm text-text-main font-medium leading-relaxed group-hover/item:text-primary transition-colors">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Action Button */}
            <div className="mt-auto">
              <div className="w-full py-4 rounded-xl font-bold text-sm text-center text-white bg-primary group-hover:bg-secondary transition-colors duration-300 shadow-md group-hover:shadow-[0_8px_20px_rgba(0,210,135,0.3)] flex items-center justify-center gap-2 overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  View Plan Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}
