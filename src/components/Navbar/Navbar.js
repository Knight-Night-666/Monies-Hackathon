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
                {/* <motion.div className='iampatient' onClick={()=>{
                navigate('/Patient/Patient')}} whileHover={{ scale: 1.1 }}>
                    <img src="assets/navbar/iampatient.png" width="100%"/>
                </motion.div> */}

                <motion.div className='iampatient' onClick={()=>{
                navigate('/Appointment/Appointment')}} whileHover={{ scale: 1.1 }}>
                    <img src="assets/navbar/iampatient.png" width="100%"/>
                </motion.div>
                
                <motion.div className='iamdoctor' onClick={()=>{
                navigate('/Doctor/Main')}} whileHover={{ scale: 1.1 }}>
                    <img src="assets/navbar/iamdoctor.png" width="100%"/>
                </motion.div>
                <motion.div className='contactus' whileHover={{ scale: 1.1 }}>
                    <img src="assets/navbar/contactus.png" width="100%"/>
                </motion.div>
            </div>
        </div>
    </div>;
  
};

export default Navbar;