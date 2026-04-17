import TestimonialCarousel from '@/components/ui/TestimonialCarousel';

const testimonials = [
  {
    quote: 'LexBridge helped us remove friction across operations and gave leadership a cleaner decision model. The impact was immediate.',
    author: 'Mila Patel',
    role: 'Managing Director',
    company: 'Verity Systems',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5
  },
  {
    quote: 'Their market analysis exposed opportunities we had missed for months. We entered a new segment with more confidence and less waste.',
    author: 'Daniel Reeves',
    role: 'Chief Strategy Officer',
    company: 'BlueHarbor Logistics',
    avatar: 'https://i.pravatar.cc/150?img=18',
    rating: 5
  },
  {
    quote: 'The team was disciplined, sharp, and easy to work with. We saw a 25% efficiency gain in one operating cycle.',
    author: 'Elena Brooks',
    role: 'VP Operations',
    company: 'Summit Works',
    avatar: 'https://i.pravatar.cc/150?img=25',
    rating: 5
  },
  {
    quote: 'LexBridge balanced strategic thinking with practical execution. That combination is rare and incredibly valuable.',
    author: 'Marcus Hale',
    role: 'Founder',
    company: 'Hale Commercial Group',
    avatar: 'https://i.pravatar.cc/150?img=31',
    rating: 5
  }
];

export default function HomeTestimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Testimonials</p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">What clients say</h2>
        </div>
        <TestimonialCarousel testimonials={testimonials} autoPlay={true} interval={5000} />
      </div>
    </section>
  );
}
