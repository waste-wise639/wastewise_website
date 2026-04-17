import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import ContactPageHero from '@/components/sections/ContactPageHero';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Contact | LexBridge',
  description: 'Start a conversation with LexBridge about your strategy.',
  openGraph: {
    title: 'Contact | LexBridge',
    description: 'Start a conversation with LexBridge about your strategy.',
    type: 'website'
  }
};

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' }
];

export default function ContactPage() {
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
        <ContactPageHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
