export default function ContactSection() {
  return (
    <section id="contact" className="  text-white lg:px-[15%]">
      <div className="container mx-auto bg-blue-600 py-12 px-4 rounded-[20px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">STILL HAVE DOUBTS?</h2>
          </div>
          <div className="flex gap-4">
            <div>
              <h3 className="text-3xl font-bold mb-4">Contact us</h3>
            </div>

            <div>
              <a
                href="#contact-form"
                className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
