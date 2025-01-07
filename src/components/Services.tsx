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
    <section className="bg-[#2B3F55] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="font-libre text-[60px] leading-tight text-white font-normal antialiased">
            Our Services
          </h2>
          
          <p className="text-base text-white/90 max-w-3xl mx-auto leading-normal antialiased">
            We specialise in Search Engine Optimisation (SEO) and google ads. We work with 
            your business to ensure you have all that you need in order to stand out in 
            whichever industry that you operate in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {services.map((service, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative w-[202px] aspect-square rounded-full overflow-hidden mx-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="202px"
                />
              </div>

              <h3 className="text-2xl text-white font-serif hover:underline">
                <Link href={service.link}>
                  {service.title}
                </Link>
              </h3>

              <p className="text-white text-base leading-relaxed font-almarai font-normal antialiased">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 