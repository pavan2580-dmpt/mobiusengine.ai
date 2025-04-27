export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-500 to-blue-700 text-white py-16 lg:px-[15%] md:py-24">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Land job interviews
            <br />
            10x faster
          </h1>
          <p className="text-lg mb-8 max-w-md opacity-90">
            Leverage our AI-powered platform to optimize your job search and increase your interview success rate.
          </p>
          <a
            href="#started"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300 inline-block"
          >
            Get Started →
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="bg-white p-4 rounded-[10px] shadow-lg">
              <div className="bg-blue-50 p-2  text-blue-800 text-xs font-medium mb-2 rounded-[3px]">
                2023/2024 HIRING TRENDS
              </div>
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-[5px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="mt-2 text-xs text-gray-500">Download our free guide →</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
