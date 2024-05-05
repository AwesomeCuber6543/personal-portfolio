import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false)

    return (
        <div>
            <button onClick={toggleSidebar} className="menu-button">
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <a href='/' className='site-title'>Yahia Salman</a>
                <ul>
                    <li><a href='/Accomplishments'>Accomplishments</a></li>
                    <li><a href='/Research'>Research</a></li>
                    <li><a href='/Projects'>Projects</a></li>
                    <li><a href='/Experience'>Experience</a></li>
                    <li><a href='/Education'>Education</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar