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
const doctorvariant={
    hidden: {
        opacity: 0,
        x:+50
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

    const controls2 = useAnimation();
    const [ref2, inView2] = useInView();
    useEffect(() => {
        if (inView2) {
        controls2.start("visible");
        }
    }, [controls2, inView2]);

    const controls3 = useAnimation();
    const [ref3, inView3] = useInView();
    useEffect(() => {
        if (inView3) {
        controls3.start("visible");
        }
    }, [controls3, inView3]);
    

  return <div className='landing_page_skeleton'>
        
        
        <motion.div className='subpage_1'
        ref={ref3}
        animate={controls3}
        variants={sb2cardsVariant}
        initial="hidden"
        >
            {/* <div className="iamdoctor_button" onClick={()=>{
                navigate("/Doctor/Main") 
            }}>I am Doctor</div> */}
            <motion.div className='textleftdoctor' variants={sb2cardVariant}>
                
                <img src='assets/landing/subpage1/text.png' height="100%"/>
            </motion.div>
            
            
                
           <motion.div className="sb1doctor" variants={doctorvariant}> 
            <img src='assets/landing/subpage1/doctor.png' height="100%" />
           </motion.div>
           

        </motion.div>


        <motion.div className='subpage_1_1'>
            <motion.div className='sb1_1heading'
            variants={sb2cardVariant}
            >
                <img src = 'assets/landing/subpage1_1/title.png' height = "100%"/>
            </motion.div>
            <div className='sb1_1imgplaceholder'>
            <motion.div className='sb1_1image' >
                <img src = 'assets/landing/subpage1_1/vehicle.png' height = "100%"/>
            </motion.div>
            </div>
           
        </motion.div>



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

                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage2/card2.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}>
                    <img src = 'assets/landing/subpage2/card3.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
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



        <motion.div className='subpage_2_1'
        ref={ref2}
        animate={controls2}
        variants={sb2cardsVariant}
        initial="hidden"
        >
            <motion.div className='sb2_1heading' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage2_1/heading.png' height = "100%"/>
            </motion.div>
            <motion.div className='sb2_1register_doc' whileHover={{ scale: 1.1 }}
            onClick={()=>{
                navigate("/Doctor/Main")
            }}
            variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage2_1/register_doctor.png' height = "100%"/>
            </motion.div>
            <div className = 'sb2_1oldmanholder'>
            <motion.div className='sb2_1oldman'>
                    <img src = 'assets/landing/subpage2_1/oldman.png' height = "100%"/>
            </motion.div>
            </div>

            
        </motion.div>




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

                
                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage3/card2.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage3/card3.png' height = "100%"/>
                </motion.div>

                <motion.div className='sb2card1' whileHover={{ scale: 1.1 }}
                variants={sb2cardVariant}
                >
                    <img src = 'assets/landing/subpage3/card4.png' height = "100%"/>
                </motion.div>
            </motion.div>

        </div>
        
  </div>;
};

export default Landing;
