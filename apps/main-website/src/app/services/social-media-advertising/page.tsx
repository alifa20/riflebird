import SeoPageTemplate from "@/components/templates/SeoPageTemplate";
import { socialMediaFaq } from "@/faqItems/socialMediaFaq";

export default function SocialMediaAdvertisingPage() {
  return (
    <SeoPageTemplate
      title="Social Media Advertising"
      image={{
        src: "/social-media-service.jpg",
        alt: "Social Media Marketing and Advertising illustration",
      }}
      content={{
        heading: "Attract more customers than ever with targeted social media marketing",
        paragraphs: [
          <p key="1">
            Social media marketing and advertising offer a cost-effective way to 
            attract more customers to your business. Since more than 95% of 
            Australian millennials are on mobile devices and social media usage 
            keeps climbing each year, incorporating social media ads into your 
            marketing strategy has become more essential than ever.
          </p>,
          <p key="2">
            Our expert team leverages <span className="text-navy font-semibold">Facebook</span> and{" "}
            <span className="text-navy font-semibold">Instagram</span> ads to tap into their 
            vast daily user base. We can target new customers for higher 
            conversions and boost engagement for your business.
          </p>,
        ],
      }}
      faqs={socialMediaFaq}
    />
  );
} 