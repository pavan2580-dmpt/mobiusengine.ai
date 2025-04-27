import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/Gradient.png";
import book from "../assets/image.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import bookicon from "../assets/book.png";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main
      className="w-full bg-cover bg-center h-fit bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Navbar */}
      <nav className="w-full py-4 px-4 md:px-6 lg:px-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className=" w-fit" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-8 text-white">
          <a href="/" className=" hover:text-blue-600">
            Home
          </a>
          <a href="#about" className=" hover:text-blue-600">
            About Us
          </a>
          <a href="#plans" className=" hover:text-blue-600">
            Plans
          </a>
          <a href="#testimonials" className=" hover:text-blue-600">
            Testimonials
          </a>
          <a href="#privacy" className=" hover:text-blue-600">
            Privacy Policy
          </a>
          <div className="relative group">
            <button className=" hover:text-blue-600 flex items-center">
              More
              <FaAngleDown/>
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-[25px] hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoMdClose size={30} color="white" />
          ) : (
            <RxHamburgerMenu size={30} color="white" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 shadow-md z-50 p-4 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 ">
            <div className="flex flex-col space-y-3 items-center">
              <a href="/" className="hover:text-white py-2 hover:border-b-2 ">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-white py-2 hover:border-b-2 "
              >
                About Us
              </a>
              <a
                href="#plans"
                className="hover:text-white py-2 hover:border-b-2 "
              >
                Plans
              </a>
              <a
                href="#testimonials"
                className="hover:text-white py-2 hover:border-b-2 "
              >
                Testimonials
              </a>
              <a
                href="#privacy"
                className="hover:text-white py-2 hover:border-b-2 "
              >
                Privacy Policy
              </a>
              <a
                href="#more"
                className="hover:text-white py-2 hover:border-b-2 "
              >
                More
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-500 border border-gray-300  px-4 py-2 rounded-[10px] hover:bg-blue-700 hover:text-white transition duration-300 text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="w-full  text-white py-16 lg:px-[15%] md:py-24">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Land job interviews
              <br />
              10x faster
            </h1>
            <p className="text-lg mb-8 max-w-md opacity-90">
              Leverage our AI-powered platform to optimize your job search and
              increase your interview success rate.
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
                <div className="bg-blue-50 p-2 text-blue-800 text-xs font-medium mb-2 rounded-[3px]">
                  2023/2024 HIRING TRENDS
                </div>
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-[5px] flex items-center justify-center">
                  <img src={book} alt="Guide book" />
                </div>
                <div className="mt-10 text-xs text-gray-500">
                  Download our free guide →
                </div>
                <div className="rounded-[50%] w-[80px] h-[80px] bg-clip-padding border-2 border-solid backdrop-filter backdrop-blur-sm bg-opacity-30 absolute bottom-[-40px] left-[85%] flex justify-center items-center">
                  <img
                    src={bookicon}
                    alt="Book Icon"
                    className="w-[50px] h-[50px]"
                  />
                  </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </main>
  );
}
