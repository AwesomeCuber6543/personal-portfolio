import React from 'react';
import './Accomplishments.css'; // This will be our CSS file for styles

const accomplishments = [
    {
        id: 1,
        title: "High Score on the 2023 Putnam Exam",
        year: "2023",
        description: "Achieved an impressive score of 9 on the highly competitive Putnam Exam, demonstrating exceptional mathematical ability and problem-solving skills.",
        icon: "🏆"
    },
    {
        id: 2,
        title: "Bitcamp Best Social Hack",
        year: "2023",
        description: "Earned the Best Social Hack at Bitcamp for creating a project that effectively addressed social issues through technological innovation.",
        icon: "💻"
    },
    {
        id: 3,
        title: "GMU Symphony Orchestra 3rd Chair",
        year: "2023",
        description: "Secured the 3rd chair in the GMU Symphony Orchestra, demonstrating musical skill and dedication to performing arts.",
        icon: "🎻"
    },
    {
        id: 4,
        title: "Innovation Workspace Rising Innovator Scholarship Recipient",
        year: "2022",
        description: "Awarded the Rising Innovator Scholarship for developing visual aid devices for the blind and severely visually impaired, utilizing Kinect for Windows sensor and C#.",
        icon: "👁️"
    },
    {
        id: 5,
        title: "Winter Research Exhibition Invitee",
        year: "2022",
        description: "Invited to present research on optimizing neural networks using quantization at the 2022 Winter Research Exhibition, signifying recognition of valuable contributions to computational research.",
        icon: "🔬"
    },
    {
        id: 6,
        title: "GMU Calculus Olympiad Finalist",
        year: "2022",
        description: "Achieved finalist status in the GMU Calculus Olympiad, highlighting superior skills in calculus and problem-solving.",
        icon: "🧮"
    },
    {
        id: 7,
        title: "Dean's Scholar",
        year: "Ongoing",
        description: "Recognized as a Dean's Scholar for 4 consecutive semesters, highlighting consistent academic excellence and leadership in scholarly activities.",
        icon: "🎓"
    },
    {
        id: 8,
        title: "American Invitational Mathematics Exam Qualifier",
        year: "2021",
        description: "Qualified for the prestigious American Invitational Mathematics Exam, showcasing superior mathematical talent and analytical prowess.",
        icon: "🔢"
    }
];



const Accomplishments = () => {
    return (
        <div className="accomplishments-container">
            {accomplishments.map((item) => (
                <div key={item.id} className="accomplishment-card">
                    <div className="icon">{item.icon}</div>
                    <div className="info">
                        <h2 className="title">{item.title}</h2>
                        <h4 className="year">{item.year}</h4>
                        <p className="description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accomplishments;
