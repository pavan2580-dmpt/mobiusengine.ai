import { FaArrowRightLong } from "react-icons/fa6";

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
               <FaArrowRightLong size={30} color="black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
