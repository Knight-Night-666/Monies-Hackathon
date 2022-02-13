import React, { Component } from 'react';
import { animate, motion } from 'framer-motion';
import './Navbar.css'
class Navbar extends Component {
    render() {
    return (
        <div className='nav'>
            <div className='title'>
                <img src="assets/navbar/title.png" width="100%"/>
            </div>
            <div className="dproutes">
                <div className='iampatient'>
                    <img src="assets/navbar/iampatient.png" width="100%"/>
                </div>
                <div className='iamdoctor'>
                    <img src="assets/navbar/iamdoctor.png" width="100%"/>
                </div>
                <div className='contactus'>
                    <img src="assets/navbar/contactus.png" width="100%"/>
                </div>
            </div>
        </div>
    );
  }
}

export default Navbar;