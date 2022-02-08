import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Landing = () => {
    let navigate = useNavigate();
  return <div>
        
        <button onClick={()=>{
            navigate("/Doctor/Doctor")
        }}>I am Doctor</button>
        <button onClick={()=>{
            navigate("/Patient/Patient")
        }}>I am Patient</button>
  </div>;
};

export default Landing;
