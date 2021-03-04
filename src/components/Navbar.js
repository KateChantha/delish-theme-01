import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";

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
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
