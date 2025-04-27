import Navbar from "../components/Navbar"
import HowItWorks from "../components/HowItWorks"
import AboutUs from "../components/AboutUs"
import Testimonials from "../components/Testimonials"
import WhyChooseUs from "../components/WhyChooseUs"
import PricingPlans from "../components/PricingPlans"
import ResumeServices from "../components/ResumeServices"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <ResumeServices />
      <ContactSection />
      <Footer />
    </main>
  )
}
