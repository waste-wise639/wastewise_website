"use client";

import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Compass, LineChart, ShieldCheck } from 'lucide-react';

interface ValueItem {
  title: string;
  description: string;
  icon: ElementType;
}

const values: ValueItem[] = [
  {
    title: 'Tailored solutions',
    description: 'Every recommendation is shaped around your context, constraints, and ambition.',
    icon: Compass
  },
  {
    title: 'Industry expertise',
    description: 'Experienced consultants bring pattern recognition that reduces risk and sharpens timing.',
    icon: ShieldCheck
  },
  {
    title: 'Proven results',
    description: 'We measure progress through performance, alignment, and operational traction.',
    icon: LineChart
  }
];

export default function AboutValues() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Principles</p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">How we work</h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="mt-10 rounded-[2rem] border border-blue-100 bg-blue-50/70 p-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">
                LexBridge exists to help businesses make better decisions, faster. We connect strategic intent to practical action so leaders can move decisively without losing precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}