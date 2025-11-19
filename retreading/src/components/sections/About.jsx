import SectionWrapper from "../common/SectionWrapper";
import teamImg from "../../assets/images/team.jpg"; // replace with your actual image path

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About TreadSetters
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl mb-4">
            At TreadSetters, our mission is to extend the life of your tyres safely and sustainably.
            Using certified retreading machinery and a team of skilled technicians, we bring worn tyres
            back to peak performance, reducing waste and keeping you on the road longer.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg sm:text-xl mb-6">
            Founded on principles of quality, safety, and environmental responsibility, TreadSetters
            combines decades of experience with modern technology to provide reliable tyre retreading
            services for individuals, fleet operators, and businesses across Nairobi and beyond.
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-6 mt-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700">
                Deliver safe, durable, and eco-friendly tyre retreading solutions for a sustainable future.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-700">
                Become the leading tyre retreading company in East Africa, known for quality, safety, and innovation.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Why Choose Us</h3>
              <p className="text-gray-700">
                Certified processes, expert technicians, modern machinery, and a commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={teamImg}
            alt="Our Team at ReTreadPro"
            className="w-full max-w-md rounded-xl shadow-lg animate-float"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
