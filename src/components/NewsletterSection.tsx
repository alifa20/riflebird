import Image from 'next/image';
import InstagramIcon from '@/icons/InstagramIcon';
import TwitterIcon from '@/icons/TwitterIcon';
import FacebookIcon from '@/icons/FacebookIcon';

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
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className={inputStyles}
                required
              />
              <button
                type="submit"
                className="inline-flex px-12 py-4 bg-navy text-white rounded-full hover:bg-navy/90 transition-colors text-lg whitespace-nowrap w-auto"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-12 pt-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Icon components remain the same... 