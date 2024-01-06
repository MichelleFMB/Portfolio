import React, { useContext, useState } from 'react';
import WomanImg from '../img/home/my_profile.jpeg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
import About from './About';
import Skills from './Skills';

import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails/index'

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ transition1 }}
      className='section justify-center items-center'
    >
      <div className="container mx-auto h-full relative pt-12">
        <div className='flex flex-col lg:flex-row justify-center items-center h-full'>
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ transition1 }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full lg:w-auto z-10 lg:pb-20 flex flex-col justify-center items-center 
            lg:items-start text-black dark:text-gray-50'
          >
            <h1 className='h1'>
              Software <br />engineer <br />student
            </h1>
            <p className='text-[26px] lg:text-[25px] font-primary font-light mb-4 lg:mb-12'>
              Peru, Lima
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ transition1 }}
            className='flex justify-end lg:max-h-max'
          >
            <div className='relative lg:-right-20 w-[400px]'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt="img"
              />
            </div> 
          </motion.div>
        </div>
      </div>
      
      {/* About section */}
      <div className='lg:py-48'>
        <About/>
      </div>

      {/* Skills section */}
      <div>
        <Skills/>
      </div>

      {/* Projects section */}
      <div>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </div>


    </motion.section>
  )
};

export default Home;