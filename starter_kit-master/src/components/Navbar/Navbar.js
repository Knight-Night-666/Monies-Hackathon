import React, { Component } from 'react';
import { animate, motion } from 'framer-motion';
import './Navbar.css'
class Navbar extends Component {
    render() {
    return (
        <nav className='root'>
            <h2>Medical App</h2>
            <img src="assets/navbar/contactus.png" height="50" />
            
            
        </nav>
    );
  }
}

export default Navbar;