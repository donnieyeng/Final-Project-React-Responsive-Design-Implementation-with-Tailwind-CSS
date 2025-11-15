import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
