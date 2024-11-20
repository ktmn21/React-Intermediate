import React from 'react';
import {Link} from "react-router-dom";

const Card = ({ title, description, image }) => {
    return (

        <div>
            <div className="card">
                <img src={image} alt={title} className="card-img"/>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>

    );
};

export default Card;
