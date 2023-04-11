import React from 'react'
import './Courses.css'
import {coursesData} from '../../Data/coursesData'

const Courses = () => {
    return (
        <div className='courses'>
            <div className="container">
                <h2 className='section-title'>courses</h2>

                <div className="content">
                    {
                        coursesData.length > 0 && coursesData.map((item, index) => 
                            <div key={index} className="item">
                                <img src={item.image} alt="" />
                                <div>
                                    <span>{item.title}</span>
                                </div>
                                <div>
                                    <span>{item.description}</span>
                                </div>
                                <button className="btn">start now</button>
                                {item.icon}
                            </div>
                        )
                    }
                </div>

                <button className='btn btn-hover'>see more</button>
            </div>
        </div>
    )
}

export default Courses
