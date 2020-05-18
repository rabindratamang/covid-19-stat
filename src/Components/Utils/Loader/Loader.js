import React from 'react';
import Logo from '../../../Assets/Images/corona.png';
import './Loader.css';

const Loader = () =>{
    return(
        <div className="loading">
            <div className="loader"> 
                <img className="spinner" src={Logo} alt="Loading..."/>
            </div>
        </div>
    );
} 
export default Loader;