"use client";

import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="bg-bg-main min-h-screen py-32">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-display text-primary">Terms of Service</h1>
            <p className="text-text-muted font-medium uppercase tracking-widest text-xs">Last Updated: May 2026</p>
          </div>

          <div className="prose prose-lg text-text-muted max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">1. Agreement to Terms</h2>
              <p>By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">2. Use License</h2>
              <p>Permission is granted to temporarily view the materials on Sarad Chaudhary&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose.</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">3. Disclaimer</h2>
              <p>The materials on the website are provided on an &apos;as is&apos; basis. Sarad Chaudhary makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">4. Accuracy of Materials</h2>
              <p>The materials appearing on the website could include technical, typographical, or photographic errors. Sarad Chaudhary does not warrant that any of the materials on its website are accurate, complete or current. Changes to the materials may be made at any time without notice.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">5. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Guwahati, Assam.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
