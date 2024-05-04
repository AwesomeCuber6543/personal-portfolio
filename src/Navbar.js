import React from 'react';

const Navbar = () => {
    return(
        <nav className='nav'>
            <a href='/' className='site-title'>Yahia Salman</a>

            <ul>
                <li><a href='/Education'>Education</a></li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Accomplishments</li>
                <li>Research</li>
            </ul>
        </nav>
    );
}

export default Navbar