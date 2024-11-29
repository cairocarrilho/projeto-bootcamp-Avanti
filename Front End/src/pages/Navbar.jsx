import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-400 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;