import React from 'react';
import './Research.css'; // Ensure the CSS file is updated to reflect this new design

const researchProjects = [
    {
        id: 1,
        title: "Enhancing Navigation for the Visually Impaired with AI-Powered Visual Aid Devices",
        description: "This project addresses a critical gap in assistive technologies for visually impaired individuals by developing an innovative AI-powered visual aid device. Utilizing LiDAR technology and the Kinect for Windows v1, coupled with an Arduino setup, this device leverages OpenCV and a custom-built machine learning model to detect and alert users to airborne obstacles that traditional aids, like the blind stick, fail to recognize. This solution enhances spatial awareness and safety, providing real-time environmental feedback to help users navigate complex environments more effectively."
    },
    {
        id: 2,
        title: "Advancing Neural Network Efficiency with Cutting-Edge Quantization Techniques",
        description: "In this research, we explore innovative quantization methods aimed at optimizing neural network performance and efficiency. By experimenting with various advanced quantization strategies, the project seeks to reduce the computational demands of neural networks while maintaining high accuracy levels. This work not only pushes the boundaries of machine learning efficiency but also paves the way for more sustainable and accessible AI deployments in resource-constrained environments."
    },
    {
        id: 3,
        title: "Quantum Enhancements in Gradient Descent Algorithms for Efficient Computation",
        description: "This research delves into the quantum computing realm, focusing on optimizing the Quantum Gradient Descent Algorithm to enhance computational processes at the quantum level. The project entails developing a quantum algorithm that efficiently handles the 2-dimensional trajectory optimization problem using a gradient descent strategy, implemented within a quantum computing framework. The research builds upon the foundational notations of Li et al., extending the capabilities of quantum states encoded in logarithmic qubits to compute and normalize vector operations through innovative quantum circuits. The research introduced an advanced model for implementing iterative gradient descent via quantum circuits, showcasing significant improvements in the precision and speed of quantum computations. This study represents a substantial contribution to quantum computing, pushing forward the practical application of quantum algorithms in solving complex optimization problems."
    },
    {
        id: 4,
        title: "AI Robot Dog Companion",
        description: "This project aims to create a robotic dog companion that recognizes human emotions with up to 90% accuracy, utilizing state-of-the-art AI techniques. Currently employing a transfer learning approach, and considering the integration of the AffectNet dataset for bespoke model training, this initiative represents a groundbreaking step towards emotionally responsive robotics. Once completed, this companion robot will offer unprecedented emotional engagement, enhancing the quality of life for users through empathetic interaction."
    },
    // Add more research projects as needed
];


const Research = () => {
    return (
        <div className="research-container">
        <div className="page-title">Research</div>
            {researchProjects.map((project) => (
                <div key={project.id} className="research-card">
                    <div className="info">
                        <h2 className="title">{project.title}</h2>
                        <p className="description">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Research;
