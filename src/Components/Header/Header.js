import React from 'react';
import './Header.css';
import Logo from '../../Assets/Images/corona.png';

const Header = () =>{
    return(
        <nav className="navbar">
            <img src={Logo} alt="Loading..."/>
            <a href="/">COVID19 STAT</a>
        </nav>
    );
} 
export default Header;