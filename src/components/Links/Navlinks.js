import React from 'react';
import { Link } from 'react-router-dom';

function Navlinks() {
  return (
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
  )
}

export default Navlinks
