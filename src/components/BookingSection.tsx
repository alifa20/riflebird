"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BookingSection = () => {
  useEffect(() => {
    // Add Calendly script to head
    const head = document.querySelector("head");
    if (head) {
      const script = document.createElement("script");
      script.setAttribute(
        "src",
        "https://assets.calendly.com/assets/external/widget.js"
      );
      head.appendChild(script);

      // Cleanup function
      return () => {
        head.removeChild(script);
      };
    }
  }, []);

  return (
    <section className="pt-24  md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column - Text Content and Image */}
        <div className="space-y-16 px-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A2B3B] leading-tight">
              Book an appointment
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Let&apos;s discuss how we can help grow your business. Schedule a
              consultation with our team to explore tailored solutions that
              align with your goals.
            </p>

            {/* <Link
              href="/book-now"
              className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
            >
              Schedule a Call
            </Link> */}
          </div>

          {/* Image with adjusted height for mobile */}
          {/* <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/consultation-image.jpg"
              alt="Business consultation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div> */}
        </div>

        {/* Right Column - Calendar Booking */}
        <div className="bg-gray-50 rounded-t-2xl p-8 h-full">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/ali-riflebirdagency/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2b3f55"
            style={{ minWidth: "300px", height: "600px" }}
            // style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
