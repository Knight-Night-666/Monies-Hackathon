import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { animate, motion } from "framer-motion/dist/es/index";


import './Navbar.css'



const Navbar = () => {
    let navigate = useNavigate();
    return <div>
        
        <div className='nav'>
            <div className='title'>
                <img src="assets/navbar/title.png" width="100%"/>
            </div>
            

            <div className="dproutes" >
                
                <div className='iampatient' onClick={()=>{
                navigate('/Patient/Patient')}}>
                    <img src="assets/navbar/iampatient.png" width="100%"/>
                </div>
                
                <div className='iamdoctor' onClick={()=>{
                navigate('/Doctor/Main')}}>
                    <img src="assets/navbar/iamdoctor.png" width="100%"/>
                </div>
                <div className='contactus'>
                    <img src="assets/navbar/contactus.png" width="100%"/>
                </div>
            </div>
        </div>
    </div>;
  
};

export default Navbar;