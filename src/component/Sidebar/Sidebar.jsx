import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import Logo1 from '../../assets/Logo-1.jpg'

const Sidebar = () => {
    const closeSideBar = () => {
        document.querySelector(".sidebar").style.transform = 'translateX(-100%)';
    }

    const rotateArrow = (e) => {
        e.target.classList.toggle("rotate");
        e.target.parentElement.parentElement.querySelector(".section-links").classList.toggle("d-none");
    }

    const handleLinks = (e) => {
        e.target.parentElement.parentElement.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    }

    return (
        <div className='sidebar'>
            {/* Logo1 & X-mark */}
            <div className='logo'>
                <img src={Logo1} alt='' />
                <i className="fa-solid fa-xmark close" onClick={closeSideBar}></i>
            </div>

            {/* Links */}
            <ul className='links'>
                <li>
                    <div>
                        <Link to='/' onClick={handleLinks} className='active'>STUDYING </Link>
                        <i className="fa-solid fa-angle-up active" onClick={rotateArrow}></i>
                    </div>
                    <ul className='section-links d-none'>
                        <li><Link to='/'>About STUDYING</Link></li>
                        <li><Link to='/'>STUDYING Story</Link></li>
                    </ul>
                </li>
                <li>
                    <div>
                        <Link to='/services' onClick={handleLinks}>Services</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to='/offerings' onClick={handleLinks}>Offerings</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to='/locations' onClick={handleLinks}>Locations </Link>
                        <i className="fa-solid fa-angle-up" onClick={rotateArrow}></i>
                    </div>
                    <ul className='section-links d-none'>
                        <li><Link to='/'>Location 01</Link></li>
                        <li><Link to='/'>Location 02</Link></li>
                        <li><Link to='/'>Location 03</Link></li>
                        <li><Link to='/'>Location 04</Link></li>
                        <li><Link to='/'>Location 05</Link></li>
                        <li><Link to='/'>Location 06</Link></li>
                        <li><Link to='/'>Location 07</Link></li>
                    </ul>
                </li>
                <li>
                    <div>
                        <Link to='/contacts' onClick={handleLinks}>Contacts</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;