import React from 'react';
import './Experience.css'; // This will be our CSS file for styles

const experiences = [
    {
        id: 2,
        company: "Cloud Native Compliance Maven (CNCM LLC)",
        role: "Backend Developer Intern",
        duration: "April 2024 - Present",
        location: "Remote",
        description: "Developing AI-driven solutions for cyber compliance in a startup environment."
    },
    {
        
        id: 3,
        company: "James Madison University",
        role: "Researcher",
        duration: "May 2024 - Present",
        location: "Harrisonburg, VA",
        description: "Researching and developing an AI-powered robotic dog for emotional recognition."
    },
    {
        id: 1,
        company: "RYBUM",
        role: "Lead Software Engineer",
        duration: "April 2023 - Present",
        location: "Fairfax, VA and Austin, TX",
        description: "Led the design and development of RYBUM's backend using TypeScript and managed overall project growth."
    },
    
    
];


const Experience = () => {
    return (
        <div className="experience-container">
            <div className="page-title">Experience</div>
            {experiences.map((exp, index) => (
                <div key={exp.id} className="experience-entry">
                    <div className="timeline-point">
                        <div className="circle"></div>
                        {index < experiences.length - 1 && <div className="arrow"></div>}
                    </div>
                    <div className="info">
                        <h2 className="company">{exp.company}</h2>
                        <h3 className="role">{exp.role}</h3>
                        <h4 className="duration">{exp.duration}</h4>
                        <h5 className="location">{exp.location}</h5>
                        <p className="description">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
