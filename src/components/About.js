import React, {useContext} from 'react';

//import images
import WomanImg from '../img/about/about_me.jpg'

//import link
import { Link } from 'react-router-dom';

//import
import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

//import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section 
    initial={{opacity:0, y: '100%'}} 
    animate= {{opacity:1, y: 0}} 
    exit= {{opacity:0, y: '100%'}} 
    transition= {{transition1}} 
    className='section'>
      <div className='container mx-auto h-full relative text-black dark:text-gray-50'>
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center 
        gap-x-24 text-center lg:text-left'>
          {/* image */}
          <div className='flex-1 max-h-90 lg:max-h-max order-2 lg:order-none'>
            <img className='relative lg:-right-20 w-[400px] h-[500px]' src={WomanImg} alt='img'/>
          </div>

          {/* text */}
          <motion.div 
          onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          initial={{opacity:0, y: '-80%'}} 
          animate= {{opacity:1, y: 0}} 
          exit= {{opacity:0, y: '-80%'}} 
          transition= {{transition1}} 
          className='flex-1 pt-20 pb-14 lg:pt-0 lg:w-auto z-10
          flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
              Hi! <b>I'm a software engineering student </b>and I'm currently in my 7th year of my degree. I love to immerse myself in the world of technology and explore new ways to create innovative solutions. 
              
              <br/>
              <br/>
              My goal is to combine my technical knowledge with my creativity to develop high performance and usable web and mobile applications.              <br/>
            </p>
            
            <Link to={'/portfolio'} className='btn'>View my projects</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
};

export default About;
