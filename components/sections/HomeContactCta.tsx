"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function HomeContactCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-700 p-10 shadow-2xl lg:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">Next step</p>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Move with clarity</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-blue-50">
                Bring the challenge. We will bring structure, perspective, and a practical plan forward.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/contact">
                <Button variant="on-dark" size="lg" className="min-h-[48px] min-w-[170px] group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" className="min-h-[48px] min-w-[170px] bg-gray-900 text-white hover:bg-gray-800">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
