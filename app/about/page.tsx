import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import AboutPageIntro from '@/components/sections/AboutPageIntro';
import AboutValues from '@/components/sections/AboutValues';
import HomeContactCta from '@/components/sections/HomeContactCta';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'About | LexBridge',
  description: 'Learn the principles, perspective, and approach behind LexBridge.',
  openGraph: {
    title: 'About | LexBridge',
    description: 'Learn the principles, perspective, and approach behind LexBridge.',
    type: 'website'
  }
};

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' }
];

export default function AboutPage() {
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
        <AboutPageIntro />
        <AboutValues />
        <HomeContactCta />
      </main>
      <Footer />
    </>
  );
}
