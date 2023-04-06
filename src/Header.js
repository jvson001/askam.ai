import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            {/* Add your logo, navigation links, and other header elements here */}
            <nav>
                <a href="/home" className="nav-link">Home</a>
                <a href="/pricing" className="nav-link">Pricing</a>
                <a href="/about" className="nav-link">About us</a>
                <a href="/contact" className="nav-link">Contact us</a>
                <a href="/login" className="nav-link">Log in/ Register</a>
            </nav>
        </header>
    );
}

export default Header;