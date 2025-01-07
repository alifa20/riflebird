import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BookingSection from '@/components/BookingSection';
import NewsletterSection from '@/components/NewsletterSection';

export default function Home() {
  return (
    <main className="pt-36 bg-dark">
      <Hero />
      <Services />
      <BookingSection />
      <NewsletterSection />
    </main>
  );
}
