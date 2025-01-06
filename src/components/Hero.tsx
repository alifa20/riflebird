import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-120px)] grid grid-cols-2 gap-8 px-16">
      {/* Left side */}
      <div className="flex flex-col justify-center space-y-8">
        <div className="transition-all duration-900 delay-240 animate-fadeIn">
          <h1 className="text-[53px] font-bold leading-tight whitespace-pre-wrap">
            You are the Hero <span className="inline-block">🫵🏼</span>
          </h1>
        </div>

        <div className="transition-all duration-900 delay-250 animate-fadeIn">
          <p className="text-2xl whitespace-pre-wrap">
            We just make it known!
          </p>
        </div>

        <div className="transition-all duration-900 delay-260 animate-fadeIn">
          <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-wrap max-w-xl">
            If you need more online traffic that you can convert into sales, 
            then you've come to the right place. At Riflebird Agency we make 
            it our business to get you noticed by boosting your online presence 
            in order to get you more revenue.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="transition-all duration-900 delay-280 animate-fadeIn">
        <div className="relative h-full w-full overflow-hidden rounded-t-[15px]">
          <Image
            src="/hero-image.jpg"
            alt="Hero image shows that people are working on marketing"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: '50% 50%'
            }}
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
} 