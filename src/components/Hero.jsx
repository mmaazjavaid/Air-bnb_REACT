import React from 'react';
import GridImage from '../images/photo-grid.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='image-sec'>
                <img className='grid-image' src={GridImage} alt=""  />
            </div>
            <div className='text-sec'>
                <p className='text-sec-head'>Online Experiences</p>
                <p className='text-sec-para'>
                    Join unique interactive activities lead by one of our kind
                    host all without leaving home.
                </p>
            </div>
        </div>
    );
};

export default Hero;