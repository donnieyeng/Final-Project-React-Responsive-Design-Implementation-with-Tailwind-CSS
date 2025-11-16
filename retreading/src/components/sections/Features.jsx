// src/components/sections/Features.jsx
import Card from "../common/Card";
import machineImg from "../../assets/images/retread-machine.jpg";
import techniciansImg from "../../assets/images/technicians.jpg";
import qualityImg from "../../assets/images/quality-check.jpg";

export default function Features() {
  const features = [
    {
      title: "Advanced Retreading Machines",
      desc: "Precision buffing and curing machines ensure durable and safe tyre retreads.",
      img: machineImg,
    },
    {
      title: "Skilled Technicians",
      desc: "Certified professionals follow strict safety and quality standards.",
      img: techniciansImg,
    },
    {
      title: "Strict Quality Checks",
      desc: "Multi-stage inspections guarantee long-lasting performance.",
      img: qualityImg,
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Retreading Process
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              title={feature.title}
              desc={feature.desc}
              img={feature.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
