import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Logo1 from '../../assets/Logo-1.jpg'
import Logo2 from '../../assets/Logo-2.png'
import './Header.css'

const Header = () => {
    const openSideBar = () => {
        document.querySelector(".sidebar").style.transform = 'translateX(0)';
    }

    const handleLinks = (e) => {
        e.target.parentElement.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    }

    return (
        <>
            <div className='header'>
                <div className='container'>
                    {/* First Logo */}
                    <div className='logo'>
                        <i className="fa-solid fa-bars bars" onClick={openSideBar}></i>
                        <img src={Logo1} alt='' />
                        <i className="fa-solid fa-magnifying-glass search"></i>
                    </div>

                    {/* Links */}
                    <ul className='links'>
                        <li>
                            <Link to="/" onClick={handleLinks} className='active'>STUDYING<span></span><span></span></Link>
                            <ul className='section-links'>
                                <li><Link to="/">About STUDYING</Link></li>
                                <li><Link to="/">STUDYING Story</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/services" onClick={handleLinks}>Services</Link>
                        </li>
                        <li>
                            <Link to="/offerings" onClick={handleLinks}>Offerings</Link>
                        </li>
                        <li>
                            <Link to="/locations" onClick={handleLinks}>Locations <span></span><span></span></Link>
                            <ul className='section-links'>
                                <li><Link to="/">Location 01</Link></li>
                                <li><Link to="/">Location 02</Link></li>
                                <li><Link to="/">Location 03</Link></li>
                                <li><Link to="/">Location 04</Link></li>
                                <li><Link to="/">Location 05</Link></li>
                                <li><Link to="/">Location 06</Link></li>
                                <li><Link to="/">Location 07</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contacts" onClick={handleLinks}>Contacts</Link>
                        </li>
                    </ul>

                    {/* Get Touch */}
                    <Link to="/*" className='get-touch'>Get In Touch</Link>

                    {/* Second Logo */}
                    <div className='sponsor'>
                        <img src={Logo2} alt='' />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header

window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector(".header").style.height = "80px";
    } else {
        document.querySelector(".header").style.height = "100px";
    }
}