export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <section id={id} className={`py-20 max-w-7xl mx-auto px-6 ${className}`}>
      {children}
    </section>
  );
}
