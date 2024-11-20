import React from 'react';
import Card from './ReusableComponents';
import MaxImg from '../images/Max.jpg';
import PoulImg from "../images/Poul.jpg";
import MishaImg from "../images/Misha.jpg";
import {Link} from "react-router-dom";

const EmployeeCard = () => {
    const Max = "Max is a seasoned developer with expertise in React, Node.js, and cloud computing. He has been with the company for 5 years and has contributed significantly to building scalable web applications and leading the development team.";
    const Poul = "Poul is an experienced project manager with over 8 years of expertise in leading cross-functional teams. He specializes in Agile methodologies and ensures seamless coordination between departments to meet project goals. Poul has a knack for problem-solving and optimizing workflows.";
    const Misha = "Misha is a creative UX/UI designer with 6 years of experience designing intuitive and visually appealing interfaces. She has a strong understanding of user behavior and specializes in creating user-centered designs that enhance product usability. Misha is passionate about blending aesthetics with functionality to deliver exceptional user experiences.";
    const cards = [
        { title: 'Max', description: Max, image: MaxImg },
        { title: 'Poul', description: Poul, image: PoulImg },
        { title: 'Misha', description: Misha, image: MishaImg },
    ];

    return (
        <div>
            <h1>Reusable Components</h1>
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}

            <Link to='/'>Home</Link>
        </div>
    );
};

export default EmployeeCard;
