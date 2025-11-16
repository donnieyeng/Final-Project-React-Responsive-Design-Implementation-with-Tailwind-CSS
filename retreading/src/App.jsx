import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Features / Services */}
        <Features />

        {/* About Us */}
        <About />

        {/* Contact / CTA */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
