import React, { useContext, useState } from 'react'
//import components
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'

//import routes
import {BrowserRouter as Router} from 'react-router-dom';

//import motion
import {motion} from 'framer-motion';

//import cursor context
import { CursorContext } from './context/CursorContext';

import Home from './components/Home';
import About from './components/About';

const App = () => {
  
  const {cursorVariants, cursorBG} = useContext(CursorContext);

  return (
    <>
      <Router>  
        <div className='bg-white dark:bg-[#252525]'>
          <Header/>
          
        </div>
        
        <AnimRoutes/>
      </Router>

      {/* cursor */}
      <motion.div 
      variants={cursorVariants}
      animate = {cursorBG}
      className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 
      pointer-events-none z-50 rounded-full'>

      </motion.div>
    </>
  )
}

export default App