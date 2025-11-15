export const metadata = {
  title: 'Unsubscribed | Riflebird Agency',
  description: 'You have been unsubscribed from our newsletter.',
};

export default function UnsubscribedPage() {
  return (
    <main className="min-h-[calc(100vh-50px)] pt-36 pb-24 px-8 md:px-16 bg-cream">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-serif text-navy">Unsubscribed</h1>
        <p className="text-gray-600 text-xl">
          You are unsubscribed from our newsletter!
        </p>
        <p className="text-gray-600">
          We&apos;re sorry to see you go. If you change your mind, you can always
          subscribe again from our homepage.
        </p>
      </div>
    </main>
  );
} 