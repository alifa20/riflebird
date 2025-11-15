import SeoPageTemplate from "@/components/templates/SeoPageTemplate";
import { googleAdsFaq } from "@/faqItems/googleAdsFaq";

export default function GoogleAdsPage() {
  return (
    <SeoPageTemplate
      title="Google Ads & PPC Marketing"
      image={{
        src: "/google-ads-service.jpg",
        alt: "Google Ads and PPC marketing illustration",
      }}
      content={{
        heading:
          "Supercharge Your Business Growth with Our Top-Rated PPC and Google Ads Agency",
        paragraphs: [
          <p key="1">
            If you&apos;re looking to drive more sales, getting your ads to
            stand out on Google is key. That&apos;s where PPC marketing comes
            in. <span className="text-navy font-semibold">PPC</span>{" "}
            (Pay-Per-Click) allows you to test your ads on a small scale,
            optimizing them to turn browsers into buyers.
          </p>,
          <p key="2">
            At <span className="text-navy font-semibold">Riflebird Agency</span>
            , we specialize in crafting high-performing PPC and Google Ads
            campaigns. Once we find the winning formula, we can scale it up,
            helping your business grow quickly and efficiently. By targeting the
            right audience and fine-tuning every detail, we ensure your ads
            bring in more customers and boost your sales.
          </p>,
        ],
      }}
      faqs={googleAdsFaq}
    />
  );
}
