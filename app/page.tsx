import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import HomeHero from '@/components/sections/HomeHero';
import HomeServices from '@/components/sections/HomeServices';
import HomeProof from '@/components/sections/HomeProof';
import HomeTestimonials from '@/components/sections/HomeTestimonials';
import HomeContactCta from '@/components/sections/HomeContactCta';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'LexBridge | Professional Consulting Services',
  description: 'Professional consulting services to elevate your business.',
  openGraph: {
    title: 'LexBridge',
    description: 'Professional consulting services to elevate your business.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LexBridge',
    description: 'Professional consulting services to elevate your business.'
  }
};

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' }
];

export default function Home() {
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
        <HomeHero />
        <HomeServices />
        <HomeProof />
        <HomeTestimonials />
        <HomeContactCta />
      </main>
      <Footer />
    </>
  );
}
