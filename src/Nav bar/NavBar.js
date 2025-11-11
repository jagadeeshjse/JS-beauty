import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/Beauty">
          <button
            className={`toggle-buttons ${isActive('/Beauty') ? 'highlight' : ''}`}
          >
            Beauty
          </button>
        </Link>
        <Link to="/Boutique">
          <button
            className={`toggle-buttons ${isActive('/Boutique') ? 'highlight' : ''}`}
          >
            Boutique
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
