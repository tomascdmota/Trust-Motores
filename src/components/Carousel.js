import React from 'react'
import '../css/carousel.css';

const Carousel = (props) => {
    const {children} = props

    return (
        <div>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;