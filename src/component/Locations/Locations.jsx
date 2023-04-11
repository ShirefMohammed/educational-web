import React from 'react'
import './Location.css'
import image1 from '../../assets/location-image-1.jpg'
import image2 from '../../assets/location-image-2.jfif'
import image3 from '../../assets/location-image-3.jfif'
import image4 from '../../assets/location-image-4.jfif'
import image5 from '../../assets/location-image-5.jfif'
import image6 from '../../assets/location-image-6.jfif'

const Locations = () => {
    return (
        <div className="locations">
            <div className="container">
                <h2 className="section-title">locations</h2>

                <div className="content">
                    <div className="item">
                        <img src={image1} alt="" />
                        <span className='btn'>location 01</span>
                    </div>
                    <div className="item">
                        <img src={image2} alt="" />
                        <span className='btn'>location 02</span>
                    </div>
                    <div className="item">
                        <img src={image3} alt="" />
                        <span className='btn'>location 03</span>
                    </div>
                    <div className="item">
                        <img src={image4} alt="" />
                        <span className='btn'>location 04</span>
                    </div>
                    <div className="item">
                        <img src={image5} alt="" />
                        <span className='btn'>location 05</span>
                    </div>
                    <div className="item">
                        <img src={image6} alt="" />
                        <span className='btn'>location 06</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations
