import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Mi Sitio
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white p-2 hover:bg-gray-700">
            Inicio
          </Link>
          <Link to="/about" className="text-white p-2 hover:bg-gray-700">
            Acerca de
          </Link>
          <Link to="/contact" className="text-white p-2 hover:bg-gray-700">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;