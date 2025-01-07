import Image from 'next/image';
import InstagramIcon from '@/icons/InstagramIcon';
import TwitterIcon from '@/icons/TwitterIcon';
import FacebookIcon from '@/icons/FacebookIcon';

export default function NewsletterSection() {
  return (
    <section className="py-8 sm:py-16 px-8 md:px-16 bg-[#DDDDD7]">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="relative w-20 h-20 mx-auto">
          <Image
            src="/logo.png"
            alt="Riflebird Agency Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Agency Name */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1A2B3B]">
          Riflebird Agency
        </h2>

        {/* Newsletter Form */}
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-gray-600 text-lg">
            Sign up with your email address to receive news and updates.
          </p>
          
          <div className="max-w-[320px] mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-[#2B3F55] text-white px-8 py-4 rounded-lg sm:w-auto mx-auto"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-6">
          <a href="#" className="text-gray-600 hover:text-black">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Icon components remain the same... 