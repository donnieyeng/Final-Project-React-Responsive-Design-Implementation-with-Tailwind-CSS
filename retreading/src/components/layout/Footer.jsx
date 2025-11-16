export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; 2025 ReTreadPro. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="mailto:info@retreadpro.com" className="hover:text-blue-500">Email</a>
          <a href="tel:+254700000000" className="hover:text-blue-500">Phone</a>
          <a href="https://goo.gl/maps/example" target="_blank" className="hover:text-blue-500">Location</a>
        </div>
      </div>
    </footer>
  );
}
