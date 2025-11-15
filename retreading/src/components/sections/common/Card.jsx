export default function Card({ title, desc, img }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
