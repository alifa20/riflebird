import Image from 'next/image';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-8 md:px-16">
      {/* Left side */}
      <div className="flex flex-col justify-center space-y-8 py-8 md:py-0 order-1 md:order-1">
        <div className="transition-all duration-900 delay-240 animate-fadeIn">
          <h1 className="text-[32px] sm:text-[40px] md:text-[53px] font-bold leading-tight whitespace-nowrap">
            You are the Hero <span className="inline-block">🫵🏼</span>
          </h1>
        </div>

        <div className="transition-all duration-900 delay-250 animate-fadeIn">
          <p className="text-xl md:text-2xl whitespace-pre-wrap">
            We just make it known!
          </p>
        </div>

        <div className="transition-all duration-900 delay-260 animate-fadeIn">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed whitespace-pre-wrap max-w-xl">
            If you need more online traffic that you can convert into sales, 
            then you&apos;ve come to the right place. At Riflebird Agency we make 
            it our business to get you noticed by boosting your online presence 
            in order to get you more revenue.
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="transition-all duration-900 delay-280 animate-fadeIn order-2 md:order-2 pb-16 md:pb-16">
        <div className="relative w-full min-h-[400px] md:min-h-[600px] aspect-[4/3] overflow-hidden rounded-[15px]">
          <Image
            src="/hero-image.jpg"
            alt="Hero image shows that people are working on marketing"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: '50% 50%'
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
} 