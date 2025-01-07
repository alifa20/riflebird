import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "SEO",
      link: "/local-seo",
      image: "/seo-service.jpg",
      description: "Let's find the bottlenecks and create a strategy to get your SEO back on track. We'll help your website rank higher and grow your business.",
      delay: "320ms",
      maskId: "circle-mask-1"
    },
    {
      title: "Google Ads",
      link: "/google-ads",
      image: "/google-ads-service.jpg",
      description: "Let's pinpoint what's holding back your Google Ads performance and craft a plan to boost your results. We create targeted ads to bring more customers to your business and boost your sales.",
      delay: "360ms",
      maskId: "circle-mask-2"
    },
    {
      title: "Social Media Advertising",
      link: "/social-media-advertising",
      image: "/social-media-service.jpg",
      description: "Let's identify what's limiting your social media ads and develop a strategy to improve your reach. We'll help you connect with more customers and grow your business.",
      delay: "400ms",
      maskId: "circle-mask-3"
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-[#4A5568]">
      <div className="max-w-6xl mx-auto">
        <div className="transition-all duration-900 delay-[293ms] animate-fadeIn">
          <h1 className="text-4xl md:text-6xl text-white text-center mb-6 whitespace-pre-wrap">
            Our Services
          </h1>
        </div>
        
        <div className="transition-all duration-900 delay-[306ms] animate-fadeIn">
          <p className="text-lg md:text-xl text-white text-center mb-16 max-w-3xl mx-auto whitespace-pre-wrap">
            We specialise in Search Engine Optimisation (SEO) and google ads. We work with 
            your business to ensure you have all that you need in order to stand out in 
            whichever industry that you operate in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`transition-all duration-900 delay-[${service.delay}] animate-fadeIn mb-8`}>
                <div className="relative w-[202px] aspect-square rounded-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="202px"
                  />
                </div>
              </div>

              <div className={`transition-all duration-900 delay-[${parseInt(service.delay) + 13}ms] animate-fadeIn`}>
                <h4 className="text-2xl text-white text-center mb-4">
                  <Link href={service.link} className="hover:opacity-80">
                    {service.title}
                  </Link>
                </h4>
              </div>

              <div className={`transition-all duration-900 delay-[${parseInt(service.delay) + 26}ms] animate-fadeIn`}>
                <p className="text-white text-center text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 