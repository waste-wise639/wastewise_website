"use client";

import { useState } from 'react';
import { CheckCircle2, Linkedin, Twitter } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  service: 'Business Strategy',
  message: ''
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-green-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Message sent</h2>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Thank you for reaching out to LexBridge. We will follow up with you shortly.
            </p>
            <div className="mt-8">
              <Button onClick={() => { setSubmitted(false); setFormData(initialState); }}>
                Send Another
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Reach us</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">A direct line to clarity</h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            We work with B2B leaders navigating growth, complexity, and change. Share a brief outline of your goals and we will respond with the best next step.
          </p>
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">Email</p>
              <p className="text-base text-gray-600">hello@lexbridge.co</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">LinkedIn</p>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-base text-gray-600 transition-colors hover:text-blue-700">
                <Linkedin className="h-5 w-5 text-blue-600" />
                LinkedIn
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Twitter</p>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-base text-gray-600 transition-colors hover:text-blue-700">
                <Twitter className="h-5 w-5 text-blue-600" />
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w4MjIzNjV8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBhZ3JlZW1lbnR8ZW58MHwwfHx8MTc3NjM5MDk5OHww&ixlib=rb-4.1.0&q=80&w=1200&h=800"
              alt="Professional handshake after a successful consulting engagement"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-900">
              Service of interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
            >
              <option>Business Strategy</option>
              <option>Market Analysis</option>
              <option>Financial Consulting</option>
              <option>Operational Efficiency</option>
            </select>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
              placeholder="Tell us about your challenge"
            />
          </div>
          <div className="mt-8">
            <Button type="submit" size="lg" className="min-h-[48px] w-full bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg">
              Send Inquiry
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
