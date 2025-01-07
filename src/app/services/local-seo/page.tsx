import Image from "next/image";
import FAQ, { FAQItem } from "@/components/FAQ";

const faqs: FAQItem[] = [
  {
    question: "What is SEO",
    answer: (
      <>
        <p className="mb-4">
          <strong className="text-navy">LOCAL SEO:</strong>
          <br />
          Local SEO (Search Engine Optimisation) is the practice of tailoring
          your online presence to reach customers in your local area. It ensures
          that your business appears when people are searching for the products
          or services you offer, right when they need them. A quality local SEO
          service provider can help your business get featured in the local
          business section (Google My Business), making it easy for potential
          customers to find and contact you.
        </p>
        <p>
          <strong className="text-navy">GOOGLE MY BUSINESS:</strong>
          <br />
          Google My Business (GMB) is a powerful online marketing tool that
          helps businesses get discovered on Google Maps, Local Finder,
          Google&apos;s Local Pack, and organic search results. It showcases
          essential information like your opening hours, photos, location, phone
          number, email address, and more, ensuring customers can easily connect
          with your business.
        </p>
      </>
    ),
  },
  {
    question: "Why Local SEO is important?",
    answer: (
      <>
        <p className="mb-4">
          <strong>FOR CUSTOMERS:</strong>
          <br />
          Local SEO makes it easy for customers to find products and services
          nearby. Instead of sifting through countless websites to see
          what&apos;s available in their area, they get relevant results right
          away.
        </p>
        <p>
          <strong>FOR BUSINESSES:</strong>
          <br />
          Local SEO helps businesses appear as relevant results in search
          engines, driving more organic traffic and attracting local customers.
          Because these leads come from people actively searching for what you
          offer, it often leads to higher conversion rates.
        </p>
      </>
    ),
  },
  {
    question: "How do you improve Local SEO results?",
    answer: (
      <>
        <p className="mb-4">Follow these 6 steps:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Set up and optimize your Google My Business account.</li>
          <li>Collect 5-star reviews from happy customers.</li>
          <li>Perform keyword research for both search engines and GMB.</li>
          <li>Focus on targeting the most relevant keywords.</li>
          <li>Optimize your website for mobile devices.</li>
          <li>Boost your website&apos;s credibility with link building.</li>
        </ol>
        <p className="mt-4">
          For more information, reach out to one of our local SEO experts.
        </p>
      </>
    ),
  },
];

//   text-4xl md:text-4xl font-normal font-serif text-charcoal
export default function LocalSEOPage() {
  return (
    <main className="pt-36 pb-24 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="font-libre text-4xl font-normal text-navy">
            Local Search Engine Optimisation (SEO)
          </h1>
          {/* <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Get your business to the top of local search results and attract more customers 
            in your area with our specialized Local SEO services.
          </p> */}
        </div>

        {/* Main Content Section */}
        <div className="relative">
          {/* Left side - Image */}
          <div className="relative h-[400px] md:h-[700px] w-[60%] overflow-hidden">
            <Image
              src="/seo-service.jpg"
              alt="Local SEO illustration showing Google search on a tablet"
              fill
              className="object-cover"
              sizes="60vw"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="absolute top-24 right-0 w-[50%] z-10">
            <div className="bg-white p-12 shadow-lg">
              <div className="max-w-xl">
                <h2 className="text-2xl font-serif text-navy mb-8 leading-tight">
                  Make your business a household name in your area using local
                  SEO
                </h2>

                <div className="space-y-6 text-navy/80">
                  <p className="leading-relaxed">
                    If you want to attract more customers in your area, getting
                    your business to show up at the top of Google search results
                    is crucial. This is where
                    <span className="text-navy font-semibold">
                      {" "}
                      local SEO
                    </span>{" "}
                    comes in.
                    <span className="text-navy font-semibold">
                      {" "}
                      Local SEO
                    </span>{" "}
                    is a strategy that helps your business appear in top spots
                    when people search online for products or services like
                    yours.
                  </p>

                  <p className="leading-relaxed">
                    At{" "}
                    <span className="text-navy font-semibold">
                      Riflebird Agency
                    </span>
                    , we specialise in getting your business into the Google
                    Local Pack — the group of listings that appear when someone
                    searches for your product or service. Since most people
                    click on one of these top options, optimizing your Google My
                    Business listing can help you secure one of those spots,
                    bringing more customers to your door and boosting your
                    sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ items={faqs} />
    </main>
  );
}
