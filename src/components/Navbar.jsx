import React, { useState } from 'react';

function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Details", href: "#details" },
    { name: "Speakers", href: "#speakers" },
    { name: "Contact", href: "#resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#" className="text-xl font-extrabold text-blue-900 tracking-tighter">
          NSRIT<span className="text-blue-500"></span>
        </a>

        <div className="hidden md:flex gap-8 font-medium text-sm text-gray-600">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;