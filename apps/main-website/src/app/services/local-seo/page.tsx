import SeoPageTemplate from "@/components/templates/SeoPageTemplate";

import { localSeoFaq } from "@/faqItems/localSeoFaq";

export default function LocalSEOPage() {
  return (
    <SeoPageTemplate
      title="Local Search Engine Optimisation (SEO)"
      image={{
        src: "/seo-service.jpg",
        alt: "Local SEO illustration showing Google search on a tablet",
      }}
      content={{
        heading: "Make your business a household name in your area using local SEO",
        paragraphs: [
          <p key="1">
            If you want to attract more customers in your area, getting your business 
            to show up at the top of Google search results is crucial. This is where
            <span className="text-navy font-semibold"> local SEO</span> comes in.
            <span className="text-navy font-semibold"> Local SEO</span> is a strategy 
            that helps your business appear in top spots when people search online for 
            products or services like yours.
          </p>,
          <p key="2">
            At <span className="text-navy font-semibold">Riflebird Agency</span>, we 
            specialise in getting your business into the Google Local Pack — the group 
            of listings that appear when someone searches for your product or service. 
            Since most people click on one of these top options, optimizing your Google 
            My Business listing can help you secure one of those spots, bringing more 
            customers to your door and boosting your sales.
          </p>
        ],
      }}
      faqs={localSeoFaq}
    />
  );
}
