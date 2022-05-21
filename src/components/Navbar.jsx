import React from 'react';
import logo from '../images/logo.jpg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo-div'>
            <img className='logo' src={logo} alt=""  />
            </div>
        </div>
    );
};

export default Navbar;