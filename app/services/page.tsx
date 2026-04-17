import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import ServicesPageHero from '@/components/sections/ServicesPageHero';
import ServicesDetailList from '@/components/sections/ServicesDetailList';
import HomeProof from '@/components/sections/HomeProof';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Services | LexBridge',
  description: 'Explore LexBridge consulting services for strategy and finance.',
  openGraph: {
    title: 'Services | LexBridge',
    description: 'Explore LexBridge consulting services for strategy and finance.',
    type: 'website'
  }
};

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' }
];

export default function ServicesPage() {
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
        <ServicesPageHero />
        <ServicesDetailList />
        <HomeProof />
      </main>
      <Footer />
    </>
  );
}
