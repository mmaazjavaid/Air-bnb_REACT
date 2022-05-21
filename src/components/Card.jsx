import React from 'react';
import person from '../images/person.jpg'
import star  from '../images/star.jpg'
const Card = () => {
    return (
        <div className="card">
        <img src={person} className="card--image" />
        <div className="card--stats">
            <img src={star} className="card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>
    </div>
    );
};

export default Card;