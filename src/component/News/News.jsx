import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './News.css'
import { NewsData } from '../../Data/NewsData'

const News = () => {
    const [width, setWidth] = useState(0)
    const containerRef = useRef()

    useEffect(() => {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }, [])

    return (
        <div className="news">
            <motion.div
                ref={containerRef}
                className="container">
                <h2 className="section-title">news</h2>
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className="content">
                    {
                        NewsData.length > 0 && NewsData.map((item) =>
                            <motion.div className="item" key={item.id}>
                                <img src={item.image} alt="" />
                                <div>
                                    <span>{item.title}</span>
                                </div>
                                <div>
                                    <span>{item.description}</span>
                                </div>
                                <div>
                                    <span></span>
                                    <span>read more</span>
                                </div>
                            </motion.div>
                        )
                    }

                </motion.div>
            </motion.div>
        </div>
    )
}

export default News
