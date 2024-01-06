import React, { useContext, useEffect, useState } from 'react';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link, useLocation } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

const Header = () => {
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
  }

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="relative w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center text-black dark:text-gray-50">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">

        <nav className="hidden xl:flex gap-x-12 font-semibold font-primary">
          <button
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            type='button'
            onClick={handleThemeSwitch}
            className='fixed z-10 right-2 top-2 bg-[#252525] border border-white text-lg p-1 rounded-md'
          >
            {theme === 'dark' ? <MdOutlineWbSunny /> : <FiMoon color="white" stroke="white" />}
          </button>
          <Link to={'/'} className={`text-black dark:text-gray-50 hover:text-[#794ab2] transition`}>
            Home
          </Link>
          <Link to={'/about'} className={`text-black dark:text-gray-50 hover:text-[#794ab2] transition`}>
            About
          </Link>
          <Link to={'/portfolio'} className={`text-black dark:text-gray-50 hover:text-[#794ab2] transition`}>
            Portfolio
          </Link>
        </nav>
      </div>

      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;