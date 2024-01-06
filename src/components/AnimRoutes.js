import React from 'react';

//import pages
import Home from './Home';
import About from './About';
import Portfolio from '../Portfolio';

//import routes route & useLocation hook
import {Routes, Route, useLocation} from 'react-router-dom';

//import animation
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </AnimatePresence>
  )
};

export default AnimRoutes;
