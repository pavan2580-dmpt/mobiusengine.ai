import { FaArrowRightLong } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { testimonials } from "../shared/constants";

export default function Testimonials() {


  return (
    <section id="testimonials" className="py-16 bg-white lg:px-[15%]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-800 mb-12">What our clients have to say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border-2 bg-blue-800  rounded-[10px] p-1  shadow-sm">
              <div className="flex items-center justify-center mb-4 h-[150px] border-2 border-solid rounded-[10px] bg-white ">
                  <FaCirclePlay size={40} color="blue"/>
              </div>
              <p className="text-white text-sm mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-end ">
                <div className="w-fit bg-white rounded-[50%] p-2 rotate-[-45deg]">
                  <FaArrowRightLong size={20} color="blue" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center flex flex-col md:flex-row items-center w-fit  gap-6">
          <button className="border border-gray-300 rounded-full px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 transition duration-300 flex items-center gap-4">
            Read customer testimonials <FaArrowRightLong/>
          </button>

          <button className="bg-blue-600 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-700 transition duration-300 flex items-center gap-4">
            Get Started <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  )
}
