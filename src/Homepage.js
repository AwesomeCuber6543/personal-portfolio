import React, { useState, useEffect } from 'react';
import './Home.css';
import './Navbar.css'
import './Home2.css'
import styled from 'styled-components';
import {Link, Route, Routes} from 'react-router-dom'
import { FaCode, FaDesktop, FaBook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Education from './Education';
import Accomplishments from './Accomplishments';
import Research from './Research';
import Experience from './Experience';
import ProjectPage from './Projects';
import AboutMe from './AboutMe';


const projects = [
  {
      title: "NeuroNavigate",
      subtitle: "UMD Bitcamp Winner",
      image: "/NeuroNavigate.png",
      date: "January 2021",
      description: "Description of Project One..."
  },
  {
    title: "Teach.ai",
    subtitle: "HackMIT Finalist",
    image: "teachai.png",
    date: "January 2021",
    description: "Description of Project One..."
},
  // Add more projects as needed
];
// `;

const ProjectCard = ({ title, subtitle, image, date, description }) => {
  return (
      <div className="project-card">
          <div className="card-container">
              <img className="card-image" src={image} alt={title} />
              <div className="card-content">
                  <h1 className="card-title">{title}</h1>
                  <h1 className="card-subtitle">{subtitle}</h1>
                  <h1 className="card-date">{date}</h1>
                  <div className="card-description">
                      {description}
                  </div>
              </div>
          </div>
      </div>
  );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false)

    return (
        <div>
            <button onClick={toggleSidebar} className="menu-button"><img className='menu-selector' src='Hamburger_icon.png'></img>
                {/* {isOpen ? 'Close' : 'Menu'} */}
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <Link to='/' className='site-title'>Yahia Salman</Link>
                <ul>
                    <li><Link to='/Accomplishments'>Accomplishments</Link></li>
                    <li><Link to='/Research'>Research</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li><Link to='/Experience'>Experience</Link></li>
                    <li><Link to='/Education'>Education</Link></li>
                </ul>
                <div className="social-icons">
                <a href="https://github.com/AwesomeCuber6543" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yasalman/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:salmanyahia04@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </nav>
        </div>
    );
};



const Home = () => {

    return (

        <div className='wrapper'>
            
            <div className='static-txt'>
            Hello, I'm
            <ul className='dynamic-txts'>
                <li><span>Yahia</span></li>
                <li><span>a Developer</span></li>
                <li><span>a Researcher</span></li>
                <li><span>an Innovator</span></li>
            </ul>
            </div>
        </div>
    );
};

const Home2 = () => {
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      // Trigger the animation shortly after the component mounts
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 500); // Delays the animation by 500ms
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="container">
        <div className={`name`}>
          Yahia Salman
        </div><br/>
          <div className="titles">-&nbsp;
            <span className='Developer'><Link to='/Projects'>Developer</Link>
            </span>&nbsp;
            <span className='Researcher'>|
            <Link to='/Research'>&nbsp;Researcher</Link>
            </span>&nbsp;
            <span className='Innovator'>|
            <Link to='/Accomplishments'>&nbsp;Innovator</Link>
            </span>  
          </div>
      </div>
    );
  }


const Projects = () => {
  return (
      <div>
          <div style={{ height: '4px', backgroundColor: 'black', width: '80%', margin: '0 auto', marginTop: '20px' }}></div>
          <div className="page-title">Featured Projects</div>
          <div className="projects-container">
          
              {projects.map((project, index) => (
                  <ProjectCard
                      key={index}
                      title={project.title}
                      subtitle={project.subtitle}
                      image={project.image}
                      date={project.date}
                      description={project.description}
                  />
              ))}
              <div className="view-all-button-container">
                  <Link to="/Projects" className="view-all-button">View All Projects</Link>
              </div>

          </div>
          
      </div>
  );
};




  
  

  const HomeFinal = () => {
    
  
    return (
      <div className="Yup">
        <Home2 /> 

        {/* <Projects /> */}
        <AboutMe />
        
        {/* <Research/> */}
      </div>
    );
  }

function Homepage() {
    return (
      <div className='App'>
        <div className="Navbar">
          <Navbar/>
        </div>
        
        <Routes>
          <Route path="/" element={<HomeFinal/>} />
          <Route path="/Education" element={<Education />} />
          <Route path='/Accomplishments' element={<Accomplishments/>} />
          <Route path='/Research' element={<Research/>} />
          <Route path='/Experience' element={<Experience/>} />
          <Route path='/Projects' element={<ProjectPage/>} />
          // Define other routes as needed
        </Routes>
      </div>
    );
  }
  
  export default Homepage;



