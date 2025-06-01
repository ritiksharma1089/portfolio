'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import RijikHeader from './Brand';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                {/* Logo and App Name */}
                <Link className="navbar-brand d-flex align-items-center text-light" href="/">
                    <RijikHeader />
                </Link>

                {/* Toggler button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible nav links */}
                <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
