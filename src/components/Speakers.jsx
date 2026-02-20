export default function Speakers() {
  const speakers = [
    { name: "Dr. John Smith", org: "MIT, USA", topic: "Quantum Computing" },
    { name: "Prof. Rajesh Kumar", org: "IIT Bombay", topic: "Sustainable Energy" },
    { name: "Elena Rodriguez", org: "Google AI", topic: "Ethical Machine Learning" }
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Distinguished Speakers</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 font-bold text-xl">
              {s.name[0]}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{s.name}</h3>
            <p className="text-blue-600 text-sm font-medium mb-2">{s.org}</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest">{s.topic}</p>
          </div>
        ))}
      </div>
    </section>
  );
}