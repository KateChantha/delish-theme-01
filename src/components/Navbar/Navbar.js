import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";
import Navlinks from '../Links/Navlinks';

import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] =  useState(false);
  const handleNavToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="navbar-header">
          <h1>
            <Link to='/'>Delish</Link>
          </h1>
          <button 
            type="button"
            className="nav-btn"
            onClick={handleNavToggle}
          >
            <FaAlignRight className="nav-icon"/>
          </button>
        </div>

        {/* <div >
          <Navlinks />
        </div> */}
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
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
      </div>
    </nav>
  )
}

export default Navbar
