export default function SectionWrapper({ children, id = "", className = "" }) {
  return (
    <section
      id={id}
      className={`w-full py-20 px-6 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
