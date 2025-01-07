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
  return (
    <main className="pt-36 pb-24 px-8 md:px-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h1 className="font-libre text-4xl font-normal text-navy">
            Contact Us
          </h1>
        </div>

        <div className="relative">
          {/* Left side - Content */}
          <div className="w-[50%]">
            <p className="text-navy/80 mb-8">
              To schedule a complimentary call with one of our digital marketing
              specialists, simply fill out the contact form, and we'll reach out
              to you promptly.
            </p>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-navy">Name (required)</label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className={`${inputStyles} w-1/2`}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`${inputStyles} w-1/2`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-navy">Email (required)</label>
                <input type="email" className={inputStyles} />
              </div>

              <div className="space-y-2">
                <label className="block text-navy">Message (required)</label>
                <textarea className={`${inputStyles} h-32 resize-none`} />
              </div>

              <button className="bg-navy text-white px-8 py-3 rounded-full hover:bg-navy/90 transition-colors">
                SEND
              </button>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-[45%] h-[600px]">
            <Image
              src="/contact-image.jpg"
              alt="Contact us"
              fill
              className="object-cover"
              sizes="45vw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
