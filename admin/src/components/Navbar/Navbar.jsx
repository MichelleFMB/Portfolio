import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="navlogo" className="nav-logo" />
        <FaUser className='nav-profile'/>
    </div>
  )
}

export default Navbar