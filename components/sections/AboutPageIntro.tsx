"use client";

import { motion } from 'framer-motion';

export default function AboutPageIntro() {
  return (
    <section className="pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">About</p>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">Built on judgment</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            LexBridge was founded on a simple principle: ambitious businesses need advice that is both rigorous and usable. Strategy means little if teams cannot act on it with confidence.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our work combines tailored solutions, industry expertise, and proven results. We stay close to the realities leaders face every day, then turn complexity into clear next moves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-amber-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwb2ZmaWNlfGVufDB8MHx8fDE3NzYzOTA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800"
              alt="Professional consulting office at LexBridge"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
