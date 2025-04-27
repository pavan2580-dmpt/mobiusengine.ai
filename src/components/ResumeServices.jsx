import { services } from "../shared/constants"

export default function ResumeServices() {
 
  return (
    <section className="py-16 bg-gray-50 lg:px-[15%]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Resume Building & Coaching</h2>
        <p className="mb-12 max-w-xl text-[#0649E7] ">
        Let’s talk about where you’re headed — and how your resume can get you there. Schedule a call to get started.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {services.map((service,idx) => (
            <div key={service.id} className="border-2 border-blue-600 rounded-[20px] p-6 bg-white hover:shadow-2xl">
              <h3 className="text-gray-800 font-medium text-xl mb-2">{service.title}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">${service.price}</span>
                <span className="text-gray-500 text-sm"> one-time fee</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
                {
                  idx ===1 &&<br/>
                }
              <a
                href="#signup"
                className="bg-blue-600 text-white text-center py-2 rounded-[10px] hover:bg-blue-700 transition duration-300 block"
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
