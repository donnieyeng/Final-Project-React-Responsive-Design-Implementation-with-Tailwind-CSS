import Button from "../common/Button";
import heroImg from "../../assets/images/tyre.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center py-28">
        {/* Text */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Extending Tyre Life Through <span className="text-blue-600">Precision Retreading</span>
          </h1>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            At ReTreadPro, we restore worn tyres to safe, durable, and eco-friendly performance
            using certified machinery and expert technicians.
          </p>

          {/* Keyword highlights */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4 flex-wrap">
            {["Safe ✅", "Durable 💪", "Eco-Friendly 🌱"].map((word, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm sm:text-base shadow-sm animate-pulse"
              >
                {word}
              </span>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
            <Button variant="primary">Get a Quote</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Retread tyre illustration"
            className="w-full max-w-md rounded-xl shadow-xl animate-float"
          />
        </div>
      </div>
    </section>
  );
}
