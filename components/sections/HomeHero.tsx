"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HomeHero() {
  return (
    <section className="border-b border-gray-200 bg-white pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Trusted by industry leaders
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            LexBridge – Transforming Your Business Potential
          </h1>
          <p className="mt-6 text-lg font-normal leading-8 text-gray-600">
            Expert consulting to elevate your business success.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="min-h-[48px] min-w-[160px] bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="min-h-[48px] min-w-[160px] border-gray-900 text-gray-900">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-8">
            <div>
              <p className="text-4xl font-bold text-gray-900">25%</p>
              <p className="mt-2 text-sm text-gray-600">Efficiency</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">90%</p>
              <p className="mt-2 text-sm text-gray-600">Client Retention</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">12+</p>
              <p className="mt-2 text-sm text-gray-600">Sectors Advised</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-amber-100 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-blue-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/80 shadow-2xl ring-1 ring-gray-100 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDB8MHx8fDE3NzYzODM1MjF8MA&ixlib=rb-4.1.0&q=80&w=1200&h=800"
              alt="LexBridge consultants in a strategy meeting"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/70 bg-white/85 p-5 shadow-lg backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Advisory focus</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">Clear strategy. Measurable momentum.</p>
              <p className="mt-2 text-sm text-gray-600">Built for B2B leaders making high-stakes decisions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
