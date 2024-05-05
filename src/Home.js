import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure you link to your CSS file

const Home = () => {

    return (

        <div className='wrapper'>
            Hello, I'm Yahia
            <div className='static-txt'>
                I'm a&nbsp;
            <ul className='dynamic-txts'>
                <li><span>Developer</span></li>
                <li><span>Researcher</span></li>
                <li><span>Innovator</span></li>
            </ul>
            </div>
        </div>
    );
};

export default Home;
