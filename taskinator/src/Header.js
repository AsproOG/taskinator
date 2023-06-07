import React from 'react';
import { Link } from 'react-router-dom';

function Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/company-list">Company List</Link>
          </li>
          <li>
            <Link to="/login">Login/Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
