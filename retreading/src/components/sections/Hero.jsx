// src/components/sections/Hero.jsx
import Button from "../common/Button";
import heroImg from "../../assets/images/tyre.jpg";

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Extending Tyre Life Through Precision Retreading
          </h1>
          <p className="mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed">
            At ReTreadPro, we restore worn-out tyres with certified machinery
            and expert technicians, ensuring safety, durability, and sustainability.
          </p>
          <div className="mt-8">
            <Button variant="primary">Get a Quote</Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Retread tyre illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
