// src/components/common/SectionWrapper.jsx
export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
