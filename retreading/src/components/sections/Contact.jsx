import { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Button from "../common/Button";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappNumber = "254111222628";
  const whatsappMessage = encodeURIComponent(
    "Hello TreadSetters! I am interested in your tyre retreading services."
  );

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <SectionWrapper id="contact" className="bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Contact Us
      </h2>

      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed text-lg sm:text-xl">
        Got a worn-out tyre? Need professional retreading services? Reach out today
        and our certified team will guide you through the process. We are here to
        extend the life of your tyres safely and reliably.
      </p>

      {/* Contact info */}
      <div className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
          <p className="text-gray-600">DonnieAsoma237@gmail.com</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
          <p className="text-gray-600">+254 111 222 628</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
          <p className="text-gray-600">Ruaraka, Nairobi, Kenya</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <Button variant="primary" onClick={toggleModal}>
          Request a Quote
        </Button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-300"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl w-full max-w-lg p-8 relative shadow-lg">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-gray-800"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">Request a Quote</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message / Tyre Details"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
              <div className="flex justify-center">
                <Button variant="primary" onClick={() => alert("Form submitted!")}>
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Embedded Google Map */}
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md">
        <iframe
          title="TreadSetters Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31886.404048442935!2d36.863893!3d-1.231388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171a1dd82e99%3A0xefd14bdb39ef63e1!2sBaba%20Dogo%2C%20Ruaraka%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
          width="100%"
          height="300"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </SectionWrapper>
  );
}
