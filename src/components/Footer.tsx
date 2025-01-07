import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B3F55] py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-300 text-sm">
        <div>
          {currentYear}{" "}
          <Link href="/" className="hover:text-white transition-colors">
            © Riflebird Agency
          </Link>{" "}
          – Digital Marketing & SEO. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:text-white transition-colors">
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
