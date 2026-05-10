import { healthPlans } from '../data/healthPlans';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComparisonTable() {
  const features = [
    { label: "Max Sum Insured", key: "sumInsured" },
    { label: "Hospitalization", key: "hospitalization" },
    { label: "Pre & Post Hospitalization", key: "prePostHosp" },
    { label: "Modern & Day Care", key: "modernDayCare" },
    { label: "Restoration Benefit", key: "restoration" },
    { label: "Initial Waiting Period", key: "waitingPeriods.initial" },
    { label: "Pre-Existing Diseases Wait", key: "waitingPeriods.ped" },
  ];

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="w-full bg-white border border-primary/10 rounded-3xl overflow-hidden shadow-fintech relative"
    >
      {/* Sticky Header */}
      <motion.div variants={fadeUp} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-bg-alt border-b border-primary/10 sticky top-0 z-10">
        <div className="p-6 lg:p-8 font-bold text-sm tracking-widest uppercase text-text-muted flex items-center">
          Compare Features
        </div>
        {healthPlans.map((plan) => (
          <div key={plan.id} className="p-6 lg:p-8 text-center border-l border-primary/10 flex flex-col justify-center bg-white">
            <h4 className="font-bold text-primary text-xl leading-tight">{plan.name}</h4>
          </div>
        ))}
      </motion.div>
      
      {/* Data Rows */}
      <div className="divide-y divide-primary/10">
        {features.map((feature, idx) => (
          <motion.div variants={fadeUp} key={idx} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] hover:bg-bg-alt/50 transition-colors group">
            <div className="p-6 lg:p-8 font-semibold text-primary flex items-center gap-2">
              {feature.label}
              <Info className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {healthPlans.map((plan) => (
              <div key={plan.id} className="p-6 lg:p-8 text-center text-text-muted font-medium border-l border-primary/10 flex items-center justify-center text-sm leading-relaxed">
                {getNestedValue(plan, feature.key)}
              </div>
            ))}
          </motion.div>
        ))}
        
        {/* Unique Highlights Row */}
        <motion.div variants={fadeUp} className="grid grid-cols-[1.5fr_1fr_1fr_1fr] bg-primary/[0.02]">
          <div className="p-6 lg:p-8 font-bold text-primary flex items-center">
            Why choose this plan?
          </div>
          {healthPlans.map((plan) => (
            <div key={plan.id} className="p-6 lg:p-8 border-l border-primary/10 flex flex-col gap-3 justify-center items-center">
              {plan.uniqueHighlights.map((highlight, hIdx) => (
                <div key={hIdx} className="w-full text-left flex items-start gap-2 bg-white px-4 py-3 rounded-xl border border-primary/10 shadow-sm">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-primary leading-tight">{highlight}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
