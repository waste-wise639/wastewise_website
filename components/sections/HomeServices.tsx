"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, ChartColumn, Landmark, Workflow } from 'lucide-react';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Business Strategy',
    description: '',
    icon: BriefcaseBusiness
  },
  {
    number: '02',
    title: 'Market Analysis',
    description: '',
    icon: ChartColumn
  },
  {
    number: '03',
    title: 'Financial Consulting',
    description: '',
    icon: Landmark
  }
];

export default function HomeServices() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Capabilities</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">What we solve</h2>
          </div>
          <div className="lg:pl-10">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-50 p-3">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Client-centric</p>
                  <p className="text-base text-gray-600">Every engagement is built around your operating reality.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white shadow-sm">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group grid gap-6 px-6 py-8 md:grid-cols-[120px_1fr_auto] md:items-center md:px-10"
              >
                <div className="text-6xl font-bold leading-none text-gray-100">{service.number}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">{service.description}</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-colors duration-300 group-hover:bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}