"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-8 md:px-16 py-8 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent z-50">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Riflebird Agency"
          width={120}
          height={40}
          className="w-[60px] md:w-[70px] h-auto"
          priority
        />
      </Link>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white" />
        )}
      </button>

      {/* Mobile menu */}
      <div className={`
        fixed inset-0 bg-[#0A0C14] pt-24 px-8
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        {/* Close button */}
        <button 
          className="absolute top-8 right-8"
          onClick={() => setIsMenuOpen(false)}
        >
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>

        <div className="flex flex-col space-y-8 items-center">
          <Link href="/" className="text-white text-xl hover:opacity-80">
            Home
          </Link>
          <Link href="/services" className="text-white text-xl hover:opacity-80">
            Services
          </Link>
          <Link href="/about" className="text-white text-xl hover:opacity-80">
            About
          </Link>
          <Link href="/contact" className="text-white text-xl hover:opacity-80">
            Contact
          </Link>
          <Link 
            href="/book-now"
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            Book now
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-12">
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