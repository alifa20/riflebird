"use client";

import { useState } from "react";
import Image from "next/image";

const inputStyles = `
  w-full
  px-4
  py-2
  bg-transparent
  border
  border-black
  rounded-[24px]
  font-['Almarai']
  text-black
  text-base
  transition-all
  duration-20
  ease-cubic-bezier(0.33, 1, 0.68, 1)
  focus:outline
  focus:outline-black
  focus:outline-[2px]
  focus:outline-offset-[2px]
  focus:border-black
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-[calc(100vh-50px)] pt-36 pb-24 px-8 md:px-16 bg-cream flex flex-col">
      <div className="max-w-7xl mx-auto flex-grow">
        <div className="text-center space-y-8 mb-16">
          <h1 className="font-libre text-4xl font-normal text-navy">Contact Us</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Image Section - Full width on mobile, right side on desktop */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[600px] order-1 md:order-2">
            <div className="relative w-full h-full">
              <Image
                src="/contact-us.jpg"
                alt="Contact us"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Form Section - Full width on mobile, left side on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <p className="text-navy/80 mb-8">
              To schedule a complimentary call with one of our digital marketing specialists, simply
              fill out the contact form, and we&apos;ll reach out to you promptly.
            </p>

            {status === "success" ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center mb-32 md:mb-0">
                Thank you for your message! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mb-32 md:mb-0">
                <div className="space-y-2">
                  <label className="block text-navy">Name (required)</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`${inputStyles} w-1/2`}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={`${inputStyles} w-1/2`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-navy">Email (required)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-navy">Message (required)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputStyles} h-32 resize-none`}
                  />
                </div>

                {status === "error" && (
                  <div className="text-red-600">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-navy text-white px-8 py-3 rounded-full hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "SEND"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
