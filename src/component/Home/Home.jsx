import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='content'>
                <span>STUDYING</span>
                <h1>FREE ONLINE STUDY</h1>
                <div className='links'>
                    <Link to='/'>Learn More</Link>
                    <Link to='/'>Get in Touch</Link>
                </div>
            </div>
        </div>
    )
}

export default Home


