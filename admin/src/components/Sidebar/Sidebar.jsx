import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { MdFeaturedPlayList } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <FaCartShopping/>
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <MdFeaturedPlayList/>
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar