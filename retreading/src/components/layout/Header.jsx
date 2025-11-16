import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-600">ReTreadPro</div>

        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About Us</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <span className="text-2xl">&#10005;</span> : <span className="text-2xl">&#9776;</span>}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#home" onClick={toggleMenu} className="hover:text-blue-600">Home</a>
            <a href="#services" onClick={toggleMenu} className="hover:text-blue-600">Services</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-blue-600">About Us</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-blue-600">Contact Us</a>
          </div>
        </nav>
      )}
    </header>
  );
}
