import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Landing.css'

const Landing = () => {
    let navigate = useNavigate();
  return <div className='landing_page_skeleton'>
        
        
        <div className='subpage_1'>

            {/* <div className="iamdoctor_button" onClick={()=>{
                navigate("/Doctor/Main") 
            }}>I am Doctor</div> */}
            <div className='textleftdoctor'>
            <img src='assets/landing/subpage1/text.png' height="100%"/>
            </div>
            
            
                
           <div className="sb1doctor">
            <img src='assets/landing/subpage1/doctor.png' height="100%"/>
           </div>
           

        </div>   
        <div className='subpage_2'>
            <div className='sb2heading'>
                <img src = 'assets/landing/subpage2/heading.png' height = "100%"/>
            </div>
            <div className='sb2cards'>
                <div className='sb2card1'>
                    <img src = 'assets/landing/subpage2/card1.png' height = "100%"/>
                </div>

                <div className='sb2card2'>
                    <img src = 'assets/landing/subpage2/card2.png' height = "100%"/>
                </div>

                <div className='sb2card3'>
                    <img src = 'assets/landing/subpage2/card3.png' height = "100%"/>
                </div>

                <div className='sb2card4'>
                    <img src = 'assets/landing/subpage2/card4.png' height = "100%"/>
                </div>
            </div>
            
            

            <div className='sb2booknow'onClick={()=>{
                navigate("/Patient/Patient")
            }}>
                <img src = 'assets/landing/subpage2/Book_Now_butt.png' height = "100%"/>
            </div>
        </div>
        <div className='subpage_3'>

        </div>
        
  </div>;
};

export default Landing;
