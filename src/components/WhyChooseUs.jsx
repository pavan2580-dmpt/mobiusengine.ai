import heart from "../assets/heart.png"
import { FaUser } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

export default function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      icon: "heart",
      title: "Most Trusted Service",
      description:
        "With a 98% satisfaction rate, our clients trust us to deliver exceptional results for their job search.",
    },
    {
      id: 2,
      icon: "users",
      title: "Real People, Real Help",
      description: "Our team of career experts provides personalized guidance tailored to your unique career goals.",
    },
    {
      id: 3,
      icon: "star",
      title: "Best in Class",
      description: "Our proven methodology has helped thousands of professionals land interviews at top companies.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 lg:px-[15%]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-12">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="border-2 border-blue-500 rounded-[10px] p-6 bg-white">
              <div className="w-10  rounded-lg flex items-center justify-center mb-4">
                {benefit.icon === "heart" && (
                  <img
                    src={heart}
                    alt="Heart Icon"
                    className="w-10 text-blue-500"
                  />
                )}
                {benefit.icon === "users" && (
                  <FaUser className=" text-blue-900" size={30}/>
                )}
                {benefit.icon === "star" && (
                 <TiStarFullOutline className=" text-blue-900" size={40}/>
                )}
              </div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
