import Image from "next/image";
import FAQ, { FAQItem } from "@/components/FAQ";

interface SeoPageTemplateProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  content: {
    heading: string;
    paragraphs: React.ReactNode[];
  };
  faqs: FAQItem[];
}

export default function SeoPageTemplate({
  title,
  image,
  content,
  faqs,
}: SeoPageTemplateProps) {
  return (
    <main className="pt-36 pb-24 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="font-libre text-4xl font-normal text-navy">
            {title}
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="relative flex flex-col md:block">
          {/* Image - Full width on mobile, 60% on desktop */}
          <div className="relative h-[300px] md:h-[700px] w-full md:w-[60%] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          {/* Content - Full width on mobile, positioned absolute on desktop */}
          <div className="w-full md:w-[50%] md:absolute md:top-24 md:right-0 md:z-10 mt-8 md:mt-0">
            <div className="bg-white p-8 md:p-12 shadow-lg">
              <div className="max-w-xl">
                <h2 className="text-2xl font-serif text-navy mb-8 leading-tight">
                  {content.heading}
                </h2>

                <div className="space-y-6 text-navy/80">
                  {content.paragraphs.map((paragraph, index) => (
                    <div key={index} className="leading-relaxed">
                      {paragraph}
                    </div>
                  ))}
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