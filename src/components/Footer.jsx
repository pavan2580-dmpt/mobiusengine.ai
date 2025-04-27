import logo from "../assets/footerlogo.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center mb-4">
              <div className="w-fit  mr-2">
                <img src={logo} alt="MessageHire Logo" className="w-fit" />
              </div>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Helping professionals land their dream jobs faster with our
              AI-powered job application service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-gray-800 font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-800 font-medium mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#faq"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    Contact Support
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-800 font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#twitter"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#linkedin"
                    className="text-gray-500 text-sm hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} MessageHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
