import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B3F55] py-4 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-4">
        <div className="text-center md:text-left">
          {currentYear}{" "}
          <Link href="/" className="hover:text-white transition-colors">
            © Riflebird Agency
          </Link>{" "}
          <span className="block md:inline pt-2 md:pt-0">
            – Digital Marketing & SEO. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          <Link href="/blog" target="_blank" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
