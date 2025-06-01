import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-black text-light">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 border-top border-secondary">
        <p className="col-md-4 mb-0 text-secondary">© 2025 Rijik-Sharma . All rights reserved.

</p>

       

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light text-opacity-75 hover-opacity-100">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link px-2 text-light text-opacity-75 hover-opacity-100">About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link px-2 text-light text-opacity-75 hover-opacity-100">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link px-2 text-light text-opacity-75 hover-opacity-100">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link px-2 text-light text-opacity-75 hover-opacity-100">skills</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
