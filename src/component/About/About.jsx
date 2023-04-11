import React from 'react'
import './About.css'
import AboutLogo from '../../assets/Logo-1.jpg'

const About = () => {
    const openFrame = () => {
        document.body.querySelector(".video-frame").classList.remove("d-none");
        document.body.querySelector(".video-frame iframe").src = 'https://www.youtube.com/embed/tgbNymZ7vqY';
    }

    const closeFrame = () => {
        document.body.querySelector(".video-frame").classList.add("d-none");
        document.body.querySelector(".video-frame iframe").src = '';
    }

    return (
        <div className="about">
            <div className="container">
                <div className="content">
                    <div className="left-a">
                        <span>digital future</span>
                        <span>STUDYING</span>
                        <p>
                            Keeping pace with the massive acceleration in digital technology, 
                            the Studying platform is based on providing resources and guidance in digital learning 
                            based on cooperation and community participation that produces the best 
                            results in learning and awareness.
                        </p>
                        <button className='btn btn-hover'>learn more</button>
                    </div>

                    <div className="right-a">
                        <img src={AboutLogo} alt="" />
                        <div className="icon" onClick={openFrame}>
                            <i className="fa-solid fa-play"></i>
                        </div>
                    </div>

                    <div className="video-frame d-none" onClick={closeFrame}>
                        <span className='close-frame' onClick={closeFrame}>X</span>
                        <iframe src=''></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
