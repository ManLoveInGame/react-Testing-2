import React from 'react'
import logo from '../images/favicon-32x32.png'
import PageLinks from './PageLinks'
import IconLinks from './IconLinks'
import { useState } from 'react';

function Nav() {

    const [isToggled,setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!isToggled);
    };



  return (
    <nav className="navbar">
    <div className="nav-logo">
        <a href="index.html">
            <img src={logo} className="logo-link" alt="logo" />
        </a>

    </div>

    {/* <!-- desktop --> */}
     {/* <!-- <div className="desktop-nav"> --> */}
        <div className="nav-links">
            <PageLinks parentClass = 'nav-list' itemClass='nav-link' id=''/>  
        </div>
        <div className="nav-icons">
            <IconLinks parentClass = 'nav-icons-list' itemClass='nav-icon'/>  
        </div>
    {/* <!-- </div> --> */}
    

    {/* // <!-- mobile --> */}
     <div className="nav-mobile">
        {/* <!-- <button type="button" className="nav-mobile-toggle" id="nav-mobile-toggle">
            <i className="fa-solid fa-bars"></i>
         </button> --> */}
        <div className="mobile-nav-links">
            <ul className="mobile-nav-list" id="mobile-nav-list">
                <PageLinks parentClass = {isToggled ? 'mobile-nav-list active':'mobile-nav-list' }
                
                itemClass='mobile-nav-link' id=''/>   
                {/* <li><a href="index.html" className="mobile-nav-link">Home</a></li>
                <li><a href="#about" className="mobile-nav-link">about</a></li>
                <li><a href="#services" className="mobile-nav-link">services</a></li>
                <li><a href="#tours" className="mobile-nav-link">tours</a></li> */}
            </ul>
        </div>
        <div className="mobile-nav-icons">
            <ul className="nav-icons-list">
                <li><a href="https://www.facebook.com" className="nav-icon"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.twitter.com" className="nav-icon"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.whatsapp.com" className="nav-icon"><i className="fa-brands fa-whatsapp"></i></a></li>
            </ul>
        </div>
     </div>


    {/* // <!-- mobile hambuger --> */}
    <div className="nav-mobile">
        <button type="button" className="nav-toggle" id="nav-toggle"
        onClick={handleToggle}>
            <i className="fa-solid fa-bars"></i>
        </button>
    </div>

</nav>
  )
}

export default Nav