import { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className='navbar'>
      <div className='navbar-container'>
        <a href='/' className='logo'>
          ReactFundamentals
        </a>

        <button
          className='menu-btn'
          onClick={toggleMenu}
          aria-label='Toggle Navigation'
        >
          ☰
        </button>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Services</a>
          <a href='/'>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
