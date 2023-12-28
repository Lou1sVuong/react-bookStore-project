// Nav.js

import React, { useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export function NavIndex() {
  useEffect(() => {
    const handleScroll = () => {
      const header2 = document.querySelector('.header .header-2');
      if (window.scrollY > 80) {
        header2.classList.add('active');
      } else {
        header2.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header-1">
          <Link to="/"><a href="/" className="logo">
            <i className="fas fa-book"></i> BookStore</a>
          </Link>
          <form action="" className="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box" />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>
          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#" className="fas fa-heart"></a>
            <Link to="/myCart" className="fas fa-shopping-cart"></Link>
            {/* <a href="#" className="fas fa-shopping-cart"></a> */}
            <Link to ="/Login">
              <div id="login-btn" className="fas fa-user"></div>
            </Link>
          </div>
        </div>
        <div className="header-2">
          <nav className="navbar">
            {/* <Link to={'/'} href="#home">home</Link> */}
            <a href="#home">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavIndex;
