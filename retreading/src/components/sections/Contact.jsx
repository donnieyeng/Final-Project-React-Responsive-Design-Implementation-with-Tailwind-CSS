// src/components/sections/Contact.jsx
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed text-lg sm:text-xl">
        Reach out to request a quote or ask questions about our retreading services.
      </p>
      <div className="flex justify-center">
        <Button variant="primary">Request a Quote</Button>
      </div>
    </SectionWrapper>
  );
}
