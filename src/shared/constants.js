import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
// about us component
export const team = [
  {
    id: 1,
    name: "Andrew",
    role: "Founder & CEO",
    bio: "Andrew is the founder of MessageHire. He is an accomplished recruitment expert with over 10 years of experience helping professionals land their dream jobs. After working at leading tech companies, Andrew founded MessageHire to revolutionize the job application process.",
    image: user1,
  },
  {
    id: 2,
    name: "Rachel",
    role: "Head of Operations",
    bio: "Rachel has been part of MessageHire since its inception. With a background in talent acquisition and HR, she brings valuable insights to our team. Rachel leads our operations team and ensures that every client receives personalized service tailored to their career goals.",
    image: user2,
  },
];

// how it works component
export const steps = [
  {
    number: 1,
    title: "Submit Intake Form",
  },
  {
    number: 2,
    title: "We do the research and optimize your resume",
  },
  {
    number: 3,
    title: "We apply on your behalf to targeted companies",
  },
  {
    number: 4,
    title: "You get the interviews",
  },
];

// pricing plans component
export const plans = [
  {
    id: "april-promo",
    name: "April Promo",
    price: 35,
    period: "weekly",
    features: [
      "5 applications per week",
      "Resume review & optimization",
      "Cover letter customization",
      "Job search strategy session",
      "Email support",
    ],
    isPopular: false,
    color: "white",
  },
  {
    id: "starter",
    name: "Starter",
    price: 50,
    period: "weekly",
    features: [
      "10 applications per week",
      "Resume review & optimization",
      "Cover letter customization",
      "Job search strategy session",
      "Email & chat support",
    ],
    isPopular: true,
    color: "white",
  },
  {
    id: "plus",
    name: "Plus",
    price: 100,
    period: "weekly",
    features: [
      "20 applications per week",
      "Resume review & optimization",
      "Cover letter customization",
      "Job search strategy session",
      "Priority email & chat support",
      "LinkedIn profile optimization",
    ],
    isPopular: false,
    color: "white",
  },
  {
    id: "advance",
    name: "Advance",
    price: 150,
    period: "weekly",
    features: [
      "Unlimited applications",
      "Resume review & optimization",
      "Cover letter customization",
      "Job search strategy session",
      "Priority email & chat support",
      "LinkedIn profile optimization",
      "Weekly coaching calls",
    ],
    isPopular: false,
    color: "blue",
  },
];

// resume services component
export const services = [
  {
    id: "resume-build",
    title: "Resume Build/Edit",
    price: 1000,
    oneTime: true,
    features: [
      "ATS-friendly resume format",
      "Professional summary and work experience",
      "Keyword optimization for job descriptions",
      "Expert review by HR professionals",
      "2 rounds of revisions",
      "LinkedIn profile optimization",
    ],
  },
  {
    id: "interview-prep",
    title: "Interview Prep",
    price: 500,
    oneTime: true,
    features: [
      "60-min mock interview session",
      "Industry-specific questions",
      "Personalized feedback",
      "Follow-up strategy coaching",
      "Salary negotiation tips",
    ],
  },
];

// testimonials component
export const testimonials = [
  {
    id: 1,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 2,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 3,
    text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
];

// why choose us component
export const benefits = [
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
    description:
      "Our team of career experts provides personalized guidance tailored to your unique career goals.",
  },
  {
    id: 3,
    icon: "star",
    title: "Best in Class",
    description:
      "Our proven methodology has helped thousands of professionals land interviews at top companies.",
  },
];
