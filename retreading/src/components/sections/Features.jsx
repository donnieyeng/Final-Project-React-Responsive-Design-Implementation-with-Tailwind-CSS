import Card from "../common/Card";
import machineImg from "../../assets/images/retread-machine.webp";
import techniciansImg from "../../assets/images/technicians.webp";
import qualityImg from "../../assets/images/quality-check.webp";

export default function Features() {
  const features = [
    {
      title: "Advanced Retreading Machines",
      desc: "Our precision buffing and curing machines ensure accurate and durable retreads.",
      img: machineImg,
    },
    {
      title: "Skilled Technicians",
      desc: "Our certified team follows strict safety and quality standards for every tyre.",
      img: techniciansImg,
    },
    {
      title: "Strict Quality Checks",
      desc: "Every tyre passes through multi-stage inspections ensuring long-lasting performance.",
      img: qualityImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Retreading Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
