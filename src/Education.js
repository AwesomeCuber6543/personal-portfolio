import React from 'react';
import './Education.css'; // Make sure you have this CSS file in your project

const Education = () => {
    const educationData = [
        {
            school: "George Mason University, Honors College",
            degree: "Bachelor of Science in Computer Science and Physics",
            year: "2022 - 2026",
            description: "Participated in various clubs and activities, achieving Dean's List for four consecutive semesters.",
            image: "GMULogo.png" // Ensure you have this image in your public folder or correctly linked
        },
        {
            school: "Plano West Senior High School",
            year: "2020-2022",
            description: "",
            image: "PlanoWestLogo.png" // Ensure you have this image in your public folder or correctly linked
        }
    ];

    return (
        <div className="education-container">
            <div className="page-title">Education</div>
            {educationData.map((edu, index) => (
                <div key={index} className="education-entry">
                    <img src={edu.image} alt={`${edu.school} campus`} className="education-image"/>
                    <div className="education-info">
                        <h3 className="education-school">{edu.school}</h3>
                        <p className="education-degree">{edu.degree}</p>
                        <p className="education-minor">{edu.minor}</p>
                        <p className="education-year">{edu.year}</p>
                        <p className="education-description">{edu.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
