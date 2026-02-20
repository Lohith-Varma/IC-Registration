export default function Details() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Why Attend */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-800">Why Attend?</h3>
          <p className="text-gray-600 text-sm">Gain insights from industry leaders, participate in hands-on workshops, and get your research published in indexed journals.</p>
        </div>
        
        {/* Who Can Attend */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-800">Who Can Attend?</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>✅ Undergraduate & PG Students</li>
            <li>✅ Academic Researchers & Faculty</li>
            <li>✅ Industry Professionals</li>
          </ul>
        </div>

        {/* Important Dates */}
        <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Important Dates</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-blue-700 pb-1">
              <span>Abstract Submission:</span> <span className="font-mono">Aug 10</span>
            </li>
            <li className="flex justify-between border-b border-blue-700 pb-1">
              <span>Full Paper Due:</span> <span className="font-mono">Aug 25</span>
            </li>
            <li className="flex justify-between">
              <span>Early Bird Ends:</span> <span className="font-mono">Sept 01</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}