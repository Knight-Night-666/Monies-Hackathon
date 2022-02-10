import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import doctorgirl from '../assets/doctorgirl.png'
import './Landing.css'

const Landing = () => {
    let navigate = useNavigate();
  return <div className='landing_page_skeleton'>
        
        
        <div className='subpage_1'>
            <div className="iamdoctor_button" onClick={()=>{
                navigate("/Doctor/Main") 
            }}>I am Doctor</div>
            <img src={doctorgirl} height="90%"/>
        </div>
        <div className='subpage_2'>
            <button onClick={()=>{
                navigate("/Patient/Patient")
            }}>I am Patient
            
            </button>
        </div>
        
  </div>;
};

export default Landing;
