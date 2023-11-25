import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <h1 class="bg-red-primary">
      Navegacion
    </h1>
  );
};

export default Navbar;