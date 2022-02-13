import React , { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'
import { useAnimation, motion } from "framer-motion/dist/es/index";
import { useInView } from "react-intersection-observer";



const sb2cardsVariant={
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        },
    }
}
const sb2cardVariant={
    hidden: {
        opacity: 0,
        x:-50
    },
    visible: {
        opacity: 1,
        x:0,
        transition: {
            duration: 1
        },
    }
}

const Landing = () => {
    let navigate = useNavigate();

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    const controls1 = useAnimation();
    const [ref1, inView1] = useInView();
    useEffect(() => {
        if (inView1) {
        controls1.start("visible");
        }
    }, [controls1, inView1]);

  return <div className='landing_page_skeleton'>
        
        
        <div className='subpage_1'>
            {/* <div className="iamdoctor_button" onClick={()=>{
                navigate("/Doctor/Main") 
            }}>I am Doctor</div> */}
            <div className='textleftdoctor'>
                
                <img src='assets/landing/subpage1/text.png' height="100%"/>
            </div>
            
            
                
           <div className="sb1doctor">
            <img src='assets/landing/subpage1/doctor.png' height="100%" />
           </div>
           

        </div>   
        <div className='subpage_2' id={'section2'}>
            <div className='sb2heading'>
                <img src = 'assets/landing/subpage2/heading.png' height = "100%"/>
            </div>

            <motion.div className='sb2cards' 
            ref={ref}
            animate={controls}
            variants={sb2cardsVariant}
            initial="hidden"
            >
                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage2/card1.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card2' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage2/card2.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card3' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}>
                    <img src = 'assets/landing/subpage2/card3.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card4' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}>
                    <img src = 'assets/landing/subpage2/card4.png' height = "100%"/>
                </motion.div>
            </motion.div>
            
            

            <motion.div className='sb2booknow'  onClick={()=>{
                navigate("/Patient/Patient")
            }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                
                <img src = 'assets/landing/subpage2/Book_Now_butt.png' height = "100%"/>
            </motion.div>
        </div>
        <div className='subpage_3'>


            <div className='sb3row' id='some-id'>
                <img src = 'assets/landing/subpage3/row.png' height = "100%"/>
            </div>
            
            <motion.div className='sb3cards' 
            ref={ref1}
            animate={controls1}
            variants={sb2cardsVariant}
            initial="hidden"
            >
                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage3/card1.png' height = "100%"/>
                </motion.div>

                
                <motion.div className='sb2card2' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage3/card2.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card3' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage3/card3.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card2' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage3/card4.png' height = "100%"/>
                </motion.div>
            </motion.div>

        </div>
        
  </div>;
};

export default Landing;
