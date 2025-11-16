// src/components/common/Button.jsx
export default function Button({ children, variant = "primary", onClick }) {
  const baseClass =
    "px-6 py-3 rounded-lg font-semibold transition-colors duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  return (
    <button className={`${baseClass} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
