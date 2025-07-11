// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Mivaan General Contracting", path: "/MivaanGeneral" },
    { name: "Mivaan Engineering Consultancy", path: "/MivaanEngineering" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img 
          src="/img/logo.png" // Update path based on actual location
          alt="Mivaan Group Logo" 
          height="90" 
          style={{
            margin: '0 0 0 25px',
          }} 
        />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-bold">
          {links.map(({ name, path }) => (
            <li className="nav-item" key={name}>
              <Link className="nav-link text-capitalize fw-bold text-black" style={{ fontSize: '15px' }} to={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/971567320392"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success ms-lg-3 d-flex align-items-center"
        >
          <FaWhatsapp className="me-2" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
