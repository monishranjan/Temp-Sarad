"use client";

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="bg-bg-main min-h-screen py-32">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-display text-primary">Privacy Policy</h1>
            <p className="text-text-muted font-medium uppercase tracking-widest text-xs">Last Updated: May 2026</p>
          </div>

          <div className="prose prose-lg text-text-muted max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">1. Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect may include your name, email address, phone number, and details regarding your insurance needs.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, operate, and maintain our services, to improve and personalize our services, and to communicate with you, either directly or through one of our partners.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide you with insurance quotes and advisory services.</li>
                <li>To facilitate the claim settlement process with insurance providers.</li>
                <li>To send you administrative information, such as policy updates or changes to our terms.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">3. Information Sharing</h2>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. This includes sharing necessary data with insurance companies to process your applications or claims.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">4. Data Security</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">5. Contact Us</h2>
              <p>If you have questions or comments about this policy, you may contact Sarad Chaudhary at <span className="text-primary font-bold">saradchaudhury123@gmail.com</span>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
