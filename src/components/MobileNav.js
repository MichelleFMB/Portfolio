import React, { useContext, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const [theme, setTheme] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <nav className="text-black dark:text-gray-50 xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? 'show' : ''}
        className={`bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 ${
          openMenu ? 'block' : 'hidden'
        }`}
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li className="hover:text-[#7654A0]">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#7654A0]">
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="hover:text-[#7654A0]">
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <button
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            type="button"
            onClick={handleThemeSwitch}
            className="text-white bg-black font-primary text-[16px] w-64 p-1 rounded-md"
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;