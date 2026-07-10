import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='logo'>
          ReactFundamentals
        </Link>

        <button
          className='menu-btn'
          onClick={toggleMenu}
          aria-label='Toggle Navigation'
        >
          ☰
        </button>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <Link to='/' onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to='/about' onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to='/products' onClick={() => setMenuOpen(false)}>
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
