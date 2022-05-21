import React from 'react';
import person from '../images/person.jpg'
import star  from '../images/star.jpg'
const Card = () => {
    return (
        <div className="card">
        <img src={person} className="card--image" />
        <div className="card--stats">
            <img src={star} />
            <span>5.0</span>
            <span>(6) • </span>
            <span>USA</span>
        </div>
        <p></p>
        <p></p>
    </div>
    );
};

export default Card;