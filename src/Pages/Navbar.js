import React, { useState } from 'react';
import './Navbar.css'
import {FaBars} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
import {ImCancelCircle} from 'react-icons/im';
import {IoMdPizza} from 'react-icons/io';

const Navbar = () => {
      return (
        <>
        <div className="navbar navbar-hover">
        <div className="icon">
        <IoMdPizza></IoMdPizza>
        </div>
       <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/contant">login</a></li>
       <li><a href="/shopping" className='cartshop'><FiShoppingCart/></a></li> 
        </ul>
   </div>
        </>
    );
}

export default Navbar;
