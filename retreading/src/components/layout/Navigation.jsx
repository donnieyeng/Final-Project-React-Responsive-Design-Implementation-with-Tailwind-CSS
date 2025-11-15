export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <a href="#home" className="hover:text-blue-700 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-700 transition">About Us</a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-700 transition">Services</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-700 transition">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
