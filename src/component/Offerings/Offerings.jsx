import React from 'react'
import './Offerings.css'
import {offeringsData} from '../../Data/offeringsData'

const Offerings = () => {
    return (
        <div className="offerings">
            <div className="container">
                <h2 className="section-title">offerings</h2>

                <div className="content">
                    {
                        offeringsData.length > 0 && offeringsData.map((item, index) => 
                            <div key={index} className="item">
                                <div>{item.icon}</div>
                                <div><span>{item.title}</span></div>
                                <div><span>{item.description}</span></div>
                                <button className="btn">see more</button>
                            </div>
                        )
                    }
                </div>

                <button className="btn btn-hover">all services</button>
            </div>
        </div>
    )
}

export default Offerings
