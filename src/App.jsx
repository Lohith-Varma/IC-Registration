import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Details from "./components/Details";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Add the Navbar here */}
      <Navbar />

      {/* Add some top padding so the Hero isn't hidden behind the fixed Navbar */}
      <div className="pt-16">
        <Hero />
      </div>

      {/* 2. Wrap components in divs with matching IDs for the Navbar to target */}
      <div id="about" className="scroll-mt-16">
        <About />
      </div>
      
      <div id="details" className="scroll-mt-16">
        <Details />
      </div>
      
      <div id="speakers" className="scroll-mt-16">
        <Speakers />
      </div>
      
      <div id="resources" className="scroll-mt-16">
        <Resources />
      </div>

      <footer className="bg-black text-gray-500 py-6 text-center text-xs">
        © 2026 International Conference | All Rights Reserved | Managed by NSRIT
      </footer>
    </div>
  );
}

export default App;