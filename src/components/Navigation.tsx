"use client";

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/services";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isHomePage || hasScrolled ? "text-white" : "text-black";
  const bookNowColor = isHomePage
    ? "bg-white text-black"
    : "bg-navy text-white";
  // const mobileTextColor = isHomePage ? "text-white" : "text-black";
  const mobileTextColor = 'text-white'

  const services = [
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "Google Ads", href: "/services/google-ads" },
    {
      name: "Social Media Advertising",
      href: "/services/social-media-advertising",
    },
  ];

  const handleServicesClick = () => {
    router.push("/services");
    setIsServicesOpen(!isServicesOpen);
  };

  // ${hasScrolled ? "bg-black/40" : "bg-transparent"}
  // bg-black/40
  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 w-full px-8 md:px-16 py-2 
      flex justify-between items-center md:backdrop-blur-lg z-50
      transition-colors duration-200 
      ${hasScrolled ? "bg-black/40" : "bg-transparent"}
    `}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Riflebird Agency"
          width={60}
          height={40}
          className="w-[60px] md:w-[60px] h-auto"
          priority
        />
      </Link>

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <XMarkIcon className={`h-8 w-8 ${textColor}`} />
        ) : (
          <Bars3Icon className={`h-8 w-8 ${textColor}`} />
        )}
      </button>

      {/* Mobile menu */}
      <div
        className={`
        fixed inset-0 bg-[var(--background)] pt-24 px-8
        transform transition-transform duration-300 ease-in-out backdrop-filter-none
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden
      `}
      >
        {/* Close button */}
        <button
          className="absolute top-8 right-8"
          onClick={() => setIsMenuOpen(false)}
        >
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>

        <div className="flex flex-col space-y-8 items-center">
          <Link
            href="/"
            className={`${mobileTextColor} text-xl hover:opacity-80`}
            onClick={() => setIsMenuOpen(false)}

          >
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="w-full text-center">
            <button
              onClick={handleServicesClick}
              className={`text-white text-xl hover:opacity-80 flex items-center justify-center gap-2 w-full ${
                isServicesOpen ? "opacity-80" : ""
              }`}
            >
              Services
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`
              mt-4 space-y-4 overflow-hidden transition-all duration-300
              ${isServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
            `}
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-white/80 text-lg hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* <Link
            href="/about"
            className={`${textColor} text-xl hover:opacity-80`}
          >
            About
          </Link> */}
          <Link
            href="/contact"
            className={`${mobileTextColor} text-xl hover:opacity-80`}
            onClick={() => setIsMenuOpen(false)}

          >
            Contact
          </Link>
          <Link
            href="/book-now"
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
            onClick={() => setIsMenuOpen(false)}

          >
            Book now
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-12">
        <Link href="/" className={`${textColor} hover:opacity-80`}>
          Home
        </Link>

        {/* Desktop Services Dropdown */}
        <div className="relative group">
          <Link
            href="/services"
            className={`${textColor} hover:opacity-80 flex items-center gap-1`}
          >
            Services
            <ChevronDownIcon className="h-4 w-4" />
          </Link>

          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* <Link href="/about" className={`${textColor} hover:opacity-80`}>
          About
        </Link> */}
        <Link href="/contact" className={`${textColor} hover:opacity-80`}>
          Contact
        </Link>
        <Link
          href="/book-now"
          className={`${bookNowColor} px-8 py-3 rounded-full hover:bg-opacity-90 transition-all`}
        >
          Book now
        </Link>
      </div>
    </nav>
  );
}
