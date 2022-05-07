import React from 'react';
import ReactImage from '../assets/images/reactjs-icon.png';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav>
            <img src={ReactImage} alt="logo" />
            <h2>ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </nav>
        
    </div>
  )
}

export default Navbar