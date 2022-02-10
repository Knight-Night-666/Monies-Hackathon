import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends Component {
    render() {
    return (
        <nav className='root'>
            <h2>Medical App</h2>
            <div className='green_box'>
                Hello it's a green button
            </div>
        </nav>
    );
  }
}

export default Navbar;