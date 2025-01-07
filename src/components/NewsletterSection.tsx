import Image from 'next/image';
import InstagramIcon from '@/icons/InstagramIcon';
import TwitterIcon from '@/icons/TwitterIcon';
import FacebookIcon from '@/icons/FacebookIcon';

export default function NewsletterSection() {
  return (
    <section className="py-16 px-8 md:px-16 bg-[#DDDDD7]">
      <div className="max-w-7xl mx-auto text-center space-y-6">
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
        <h2 className="text-3xl md:text-4xl font-serif text-[#1A2B3B]">
          Riflebird Agency
        </h2>

        {/* Newsletter Form */}
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-gray-600">
            Sign up with your email address to receive news and updates.
          </p>
          
          <div className="max-w-[320px] sm:max-w-none mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-[#2B3F55] text-white px-6 py-3 rounded-lg mx-auto sm:mx-0"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 pt-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Icon components remain the same... 