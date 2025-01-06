import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="w-full px-16 py-8 flex justify-between items-center bg-transparent">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Riflebird Agency"
          width={120}
          height={40}
          priority
        />
      </Link>
      
      <div className="flex items-center gap-12">
        <Link href="/" className="text-white hover:opacity-80">
          Home
        </Link>
        <Link href="/services" className="text-white hover:opacity-80">
          Services
        </Link>
        <Link href="/about" className="text-white hover:opacity-80">
          About
        </Link>
        <Link href="/contact" className="text-white hover:opacity-80">
          Contact
        </Link>
        <Link 
          href="/book-now"
          className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
        >
          Book now
        </Link>
      </div>
    </nav>
  );
} 