// src/components/sections/About.jsx
import SectionWrapper from "../common/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        About ReTreadPro
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg sm:text-xl">
        ReTreadPro restores worn tyres to extend their life. Using certified machinery
        and skilled technicians, we reduce waste, improve safety, and deliver reliable performance.
      </p>
    </SectionWrapper>
  );
}
