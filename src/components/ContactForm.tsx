"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Health Insurance',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.phone.match(/^[0-9]{10}$/)) newErrors.phone = '10-digit phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <div className="card-fintech p-8 md:p-12 relative overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Message Sent!</h2>
            <p className="text-text-muted max-w-sm">Thank you for reaching out. I will get back to you within 24 hours.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary hover:text-primary transition-all"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-5 py-4 rounded-xl bg-bg-main border ${errors.name ? 'border-red-500' : 'border-primary/5'} focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none text-primary font-medium`}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-5 py-4 rounded-xl bg-bg-main border ${errors.email ? 'border-red-500' : 'border-primary/5'} focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none text-primary font-medium`}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Phone Number</label>
                <input 
                  type="tel"
                  placeholder="10-digit number"
                  className={`w-full px-5 py-4 rounded-xl bg-bg-main border ${errors.phone ? 'border-red-500' : 'border-primary/5'} focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none text-primary font-medium`}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Plan of Interest</label>
                <div className="relative">
                  <select 
                    className="w-full px-5 py-4 rounded-xl bg-bg-main border border-primary/5 focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none text-primary font-medium appearance-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option>Health Insurance</option>
                    <option>Personal Accident</option>
                    <option>Motor Insurance</option>
                    <option>Marine Policy</option>
                    <option>Fire Insurance</option>
                    <option>Investment Planning</option>
                  </select>
                  <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted rotate-90" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Message</label>
              <textarea 
                placeholder="Tell us about your requirements..."
                rows={5}
                className={`w-full px-5 py-4 rounded-xl bg-bg-main border ${errors.message ? 'border-red-500' : 'border-primary/5'} focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none text-primary font-medium resize-none`}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
            </div>

            <button 
              disabled={status === 'submitting'}
              type="submit"
              className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-secondary hover:text-primary transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {status === 'submitting' ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
