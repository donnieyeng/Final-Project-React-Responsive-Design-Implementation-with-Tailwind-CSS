export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold">ReTreadPro</h2>
        <p className="mt-2 text-gray-400">
          Bringing Worn Tyres Back to Life.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} ReTreadPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
