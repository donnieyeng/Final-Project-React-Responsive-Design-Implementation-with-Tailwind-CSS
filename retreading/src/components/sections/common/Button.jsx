export default function Button({ children, variant = "primary" }) {
  const base = "px-6 py-3 rounded-lg font-semibold transition";

  const variants = {
    primary: `${base} bg-blue-700 text-white hover:bg-blue-800`,
    secondary: `${base} bg-gray-300 text-gray-800 hover:bg-gray-400`,
    outline: `${base} border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white`,
  };

  return <button className={variants[variant]}>{children}</button>;
}
