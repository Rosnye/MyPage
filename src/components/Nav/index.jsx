import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <h1 class="bg-violet-primary">
      <button class="m-2 bg-red-primary rounded-2xl border-black border-2 p-2 text-white">Contratame</button>
    </h1>
  );
};

export default Navbar;