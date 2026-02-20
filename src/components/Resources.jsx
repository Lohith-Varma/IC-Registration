export default function Resources() {
  return (
    <section className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Submit Your Research</h2>
          <p className="text-gray-400 mb-6">Please follow our formatting guidelines for paper submission.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2">
            📄 Download Sample Paper (.docx)
          </button>
        </div>

        <div className="pt-12 border-t border-gray-800 grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">Contact Us</h4>
            <p className="text-lg">ic2026@nsrit.edu.in</p>
            <p className="text-gray-400">+91 xxxxxxxxxxx</p>
          </div>
          <div>
            <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">Venue</h4>
            <p className="text-lg">Department of Computer Science</p>
            <p className="text-gray-400">NSRIT, Visakhapatnam</p>
          </div>
        </div>
      </div>
    </section>
  );
}