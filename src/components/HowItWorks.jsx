import { steps } from "../shared/constants"

export default function HowItWorks() {
  

  return (
    <section className="py-16 bg-white lg:px-[15%]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-12">How we work?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">
                {step.number}
              </div>
              <h3 className="text-blue-600 font-medium text-lg mb-2 text-center border-t-2 border-blue-500">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
