import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import TestimonialsPageHero from '@/components/sections/TestimonialsPageHero';
import HomeTestimonials from '@/components/sections/HomeTestimonials';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Testimonials | LexBridge',
  description: 'See what clients say about LexBridge’s strategic clarity.',
  openGraph: {
    title: 'Testimonials | LexBridge',
    description: 'See what clients say about LexBridge’s strategic clarity.',
    type: 'website',
  },
};

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar
        logo="LexBridge"
        menuItems={menuItems}
        ctaText="Get Started"
        ctaHref="/contact"
        variant="light"
      />
      <main className="bg-white">
        <TestimonialsPageHero />
        <HomeTestimonials />
      </main>
      <Footer />
    </>
  );
}