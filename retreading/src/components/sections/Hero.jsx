import Button from "../common/Button";
import heroImg from "../../assets/images/hero-tyre.webp";

export default function Hero() {
  return (
    <section id="home" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Extending Tyre Life Through Precision Retreading
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            At ReTreadPro, we specialize in restoring worn-out tyres
            using industry-grade machinery, certified processes,
            and expert technicians.
          </p>

          <div className="mt-8">
            <Button variant="primary">Get a Quote</Button>
          </div>
        </div>

        <div>
          <img
            src={heroImg}
            alt="Retread tyre illustration"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
