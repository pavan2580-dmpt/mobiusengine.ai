import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import { FaLinkedinIn } from "react-icons/fa6";
import bg from "../assets/BG.png";

export default function AboutUs() {
  const team = [
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

  return (
    <section
      id="about"
      className="py-16  text-white lg:px-[15%]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-12">About Us</h2>

        <div className="space-y-12">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="relative">
                <div className=" w-32 h-32 rounded-full overflow-hidden bg-white flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-center"
                />
                </div>
                <div className="absolute bottom-0 right-0 w-fit p-2 rounded-full bg-white flex justify-center items-center border-2 border-solid backdrop-filter backdrop-blur-sm bg-opacity-30 ">
                  <FaLinkedinIn size={30} color="black" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {member.name}{" "}
                  <span className="text-blue-300 text-sm ml-2">
                    {member.role}
                  </span>
                </h3>
                <p className="mt-2 text-blue-100 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-300 text-sm">
            Learn more about MessageHire's mission →
          </p>
          <p className="text-blue-300 text-sm mt-2">
            Join our team of professionals →
          </p>
        </div>
      </div>
    </section>
  );
}
