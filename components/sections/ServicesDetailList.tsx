"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, ChartColumn, Landmark, Workflow } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetail {
  number: string;
  title: string;
  body: string;
  icon: React.ElementType;
}

const items: ServiceDetail[] = [
  {
    number: '01',
    title: 'Business Strategy',
    body: 'We help leadership teams clarify priorities, evaluate tradeoffs, and focus execution around the moves that matter most.',
    icon: BriefcaseBusiness
  },
  {
    number: '02',
    title: 'Market Analysis',
    body: 'Our analysis translates competitive shifts, demand signals, and customer behavior into sharper positioning and smarter investment decisions.',
    icon: ChartColumn
  },
  {
    number: '03',
    title: 'Financial Consulting',
    body: 'From planning models to margin pressure, we create financial visibility that supports sustainable and disciplined growth.',
    icon: Landmark
  }
];

export default function ServicesDetailList() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-y divide-gray-200 rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-6 px-6 py-8 lg:grid-cols-[140px_1fr_180px] lg:items-center lg:px-10"
              >
                <div className="text-6xl font-bold leading-none text-gray-100">{item.number}</div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
                  </div>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">{item.body}</p>
                </div>
                <div className="lg:text-right">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-700">
                    Discuss service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="grid gap-6 px-6 py-8 lg:grid-cols-[140px_1fr_180px] lg:items-center lg:px-10"
          >
            <div className="text-6xl font-bold leading-none text-gray-100">04</div>
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Operational Efficiency</h2>
              </div>
              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
                We streamline operating rhythms, decision paths, and cross-functional execution so progress is easier to sustain.
              </p>
            </div>
            <div className="lg:text-right">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-700">
                Start here
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}