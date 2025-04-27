import { plans } from "../shared/constants"

export default function PricingPlans() {


  return (
    <section id="plans" className="py-16 bg-white lg:px-[15%]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-12">Job Application Service Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
          {plans.slice(0, 3).map((plan) => (
            <div key={plan.id} className="border-2 hover:shadow-2xl border-blue-500 rounded-[10px] p-6 bg-white flex flex-col h-full  transition duration-300">
              <div className="mb-4">
                <h3 className="text-gray-800 font-medium text-xl">{plan.name}</h3>
                {plan.isPopular && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                    Popular
                  </span>
                )}
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-500 text-sm">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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

              <a
                href="#signup"
                className="bg-blue-600 text-white text-center py-2 rounded-[10px] hover:bg-blue-700 transition duration-300 mt-auto"
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>

        {/* Advanced Plan */}
        <div className="bg-blue-600 rounded-[20px] p-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="font-medium text-xl">Advanced</h3>
              <div className="mt-2 mb-4 md:mb-0">
                <span className="text-3xl font-bold">${plans[3].price}</span>
                <span className="text-sm opacity-80">/{plans[3].period}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
              <ul className="space-y-2">
                {plans[3].features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {plans[3].features.slice(4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#signup"
              className="bg-white text-blue-600 px-4 py-2 rounded-[10px] hover:bg-gray-100 transition duration-300 mt-4 md:mt-0 w-full md:w-auto text-center"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
