import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">
          ReTreadPro
        </h1>
        <Navigation />
      </div>
    </header>
  );
}
