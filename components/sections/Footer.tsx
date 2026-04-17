import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xl font-semibold text-gray-900">LexBridge</p>
          <p className="mt-2 text-sm text-gray-600">Strategy with staying power.</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          <Link href="/" className="text-sm text-gray-600 transition-colors hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-sm text-gray-600 transition-colors hover:text-gray-900">About</Link>
          <Link href="/services" className="text-sm text-gray-600 transition-colors hover:text-gray-900">Services</Link>
          <Link href="/contact" className="text-sm text-gray-600 transition-colors hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
