import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";
import Navlinks from './Navlinks';

function Navbar() {
  const [isOpen, setIsOpen] =  useState(false);
  const handleNavToggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <h1>
        <Link to='/'>Delish</Link>
      </h1>
      <button 
        type='button'
        onClick={handleNavToggle}
      >
        <FaAlignRight />
      </button>
      <div>
        <Navlinks />
      </div>
    </nav>
  )
}

export default Navbar
