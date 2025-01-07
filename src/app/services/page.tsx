import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "SEO",
      link: "/services/local-seo",
      image: "/seo-service.jpg",
      description: "Let's find the bottlenecks and create a strategy to get your SEO back on track. We'll help your website rank higher and grow your business."
    },
    {
      title: "Google Ads",
      link: "/services/google-ads",
      image: "/google-ads-service.jpg",
      description: "Let's pinpoint what's holding back your Google Ads performance and craft a plan to boost your results. We create targeted ads to bring more customers to your business and boost your sales."
    },
    {
      title: "Social Media Advertising",
      link: "/services/social-media-advertising",
      image: "/social-media-service.jpg",
      description: "Let's identify what's limiting your social media ads and develop a strategy to improve your reach. We'll help you connect with more customers and grow your business."
    }
  ];

  return (
    <main className=" pb-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            We specialize in Search Engine Optimization (SEO) and Google Ads. Our team works 
            with your business to ensure you have all that you need to stand out in your industry.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.link}
              className="group block bg-[#1A2B3B] rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-[200px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white group-hover:text-gray-200">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-white group-hover:text-gray-200">
                  Learn more
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 