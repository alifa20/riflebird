"use client";

import { useState } from 'react';
import Image from 'next/image';
// import InstagramIcon from '@/icons/InstagramIcon';
// import TwitterIcon from '@/icons/TwitterIcon';
// import FacebookIcon from '@/icons/FacebookIcon';

const inputStyles = `
  w-full
  px-6
  py-4
  bg-transparent
  border
  border-gray-400
  rounded-full
  font-['Almarai']
  text-gray-600
  text-lg
  placeholder:text-gray-400
  transition-all
  duration-20
  ease-cubic-bezier(0.33, 1, 0.68, 1)
  focus:outline
  focus:outline-black
  focus:outline-[2px]
  focus:outline-offset-[2px]
  focus:border-black
`;

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };

  return (
    <section className="py-16 px-8 md:px-16 bg-cream">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="relative w-16 h-16 mx-auto">
          <Image
            src="/logo.png"
            alt="Riflebird Agency Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Agency Name */}
        <h2 className="text-4xl font-serif text-navy">
          Riflebird Agency
        </h2>

        {/* Newsletter Form */}
        <div className="space-y-6">
          <p className="text-gray-600 text-xl">
            Sign up with your email address to receive news and updates.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyles}
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex px-12 py-4 bg-navy text-white rounded-full hover:bg-navy/90 transition-colors text-lg whitespace-nowrap w-auto"
              >
                {status === 'loading' ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>
            
            {status === 'success' && (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center mt-4">
                Thank you for subscribing! We&apos;ll be in touch soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-50 text-red-800 p-4 rounded-lg text-center mt-4">
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="flex justify-center gap-12 pt-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div> */}
      </div>
    </section>
  );
}

// Icon components remain the same... 