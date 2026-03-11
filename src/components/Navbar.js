import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['about', 'skills', 'experience', 'projects', 'hobbies', 'contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        manvi<span>.dev</span>
      </div>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
