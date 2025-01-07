import Image from 'next/image';
import Link from 'next/link';

export default function BookingSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column - Text Content and Image */}
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A2B3B] leading-tight">
              Book an appointment
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Let's discuss how we can help grow your business. Schedule a consultation 
              with our team to explore tailored solutions that align with your goals.
            </p>
            
            <Link 
              href="/book-now" 
              className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all"
            >
              Schedule a Call
            </Link>
          </div>

          {/* Image with more space above it */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mt-8">
            <Image
              src="/consultation-image.jpg"
              alt="Business consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column - Calendar Booking */}
        <div className="bg-gray-50 rounded-2xl p-8 h-full">
          <div className="h-[600px]">
            <iframe 
              src="https://calendly.com/your-calendar"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 