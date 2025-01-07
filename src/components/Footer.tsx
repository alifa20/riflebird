export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2B3F55] py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-300 text-sm">
        <div>
          {currentYear} © Riflebird Agency – Digital Marketing & SEO
        </div>
        <div className="flex gap-6">
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
} 