import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Manage.css'
import image1 from '../../assets/manage-image-1.png'
import image2 from '../../assets/manage-image-2.png'
import image3 from '../../assets/manage-image-3.png'
import image4 from '../../assets/manage-image-4.png'

const Manage = () => {
    const [width, setWidth] = useState(0);
    const containerRef = useRef()

    useEffect(() => {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }, [])

    return (
        <div className='manage'>
            <motion.div
                ref={containerRef}
                className="container">
                <h1 className="section-title">manage by</h1>

                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className="content">
                    <motion.div className="item">
                        <div>
                            <img src={image1} alt="" />
                            <img src={image1} alt="" />
                        </div>
                    </motion.div>
                    <motion.div className="item">
                        <div>
                            <img src={image2} alt="" />
                            <img src={image2} alt="" />
                        </div>
                    </motion.div>
                    <motion.div className="item">
                        <div>
                            <img src={image3} alt="" />
                            <img src={image3} alt="" />
                        </div>
                    </motion.div>
                    <motion.div className="item">
                        <div>
                            <img src={image4} alt="" />
                            <img src={image4} alt="" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Manage
