import Image from 'next/image';

export default function LocalSEOPage() {
  return (
    <main className="pt-36 pb-24 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
            Local Search Engine Optimisation (SEO)
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Get your business to the top of local search results and attract more customers 
            in your area with our specialized Local SEO services.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-[24px] overflow-hidden">
            <Image
              src="/seo-service.jpg"
              alt="Local SEO illustration showing Google search on a tablet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
                Make Your Business A Household Name In Your Area Using Local SEO
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  If you want to attract more customers in your area, getting your business 
                  to show up at the top of Google search results is crucial. This is where 
                  <span className="text-charcoal font-semibold"> local SEO</span> comes in. 
                  <span className="text-charcoal font-semibold"> Local SEO</span> is a strategy 
                  that helps your business appear in top spots when people search online for 
                  products or services like yours.
                </p>

                <p>
                  At <span className="text-charcoal font-semibold">Riflebird Agency</span>, we 
                  specialise in getting your business into the Google Local Pack — the group 
                  of listings that appear when someone searches for your product or service. 
                  Since most people click on one of these top options, optimizing your Google 
                  My Business listing can help you secure one of those spots, bringing more 
                  customers to your door and boosting your sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 