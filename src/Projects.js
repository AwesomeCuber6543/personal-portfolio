import React from 'react';
import './Projects.css'; 

const projects1 = [
    {
        title: "Rybum",
        subtitle: "iOS Album Sharing App",
        image: "/rybum.png",
        description: "Developed an iOS app for creating and sharing personalized music albums. Implemented with Swift UIKit, NodeJS/Typescript backend, and MySQL, featuring a RESTful API for enhanced user interaction."
    },
    {
        title: "Teach.ai",
        subtitle: "Real-Time Classroom Emotion and Attention Analysis",
        image: "/teachai.png",
        description: "Designed a model to detect student emotions and attention using VGG19 and FER-13, achieving 75% accuracy. Integrated real-time feedback via an iOS interface to assist educators."
    },
    {
        title: "Prepr",
        subtitle: "AI Mock Interview Platform",
        image: "PreprLogo.jpg",
        description: "Created an interview preparation platform using AI to provide feedback on eye contact and speech. Employed OpenCV for iris tracking and speech AI models for realistic interactions."
    },
    {
        title: "REPS",
        subtitle: "Fitness Tracking and Analysis Application",
        image: "Reps.png",
        description: "Developed a fitness app that records workouts in real-time using AI Pose Detection. Features exercise recognition with OpenCV and a macronutrient tracker for comprehensive fitness management."
    },
    {
        title: "NeuroNavigate",
        subtitle: "Supportive Educational Tool for Children with Autism",
        image: "NeuroNavigate.png",
        description: "Built an educational app for children with autism to practice social skills, powered by Python, Flask, OpenCV, and AI models. Provides interactive exercises for emotional recognition and conversation skills."
    }
];



const ProjectPage = () => {
    return (
        <div className="projects-container">
            <div className="page-title">Projects</div>  
            {projects1.map((project, index) => (
                <div key={index} className="project-card">
                    <div className="card-container">
                        <img className="card-image" src={project.image} alt={project.title} />
                        <div className="card-content">
                            <h2 className="card-title">{project.title}</h2>
                            <h3 className="card-subtitle">{project.subtitle}</h3>
                            <p className="card-description">{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectPage;
