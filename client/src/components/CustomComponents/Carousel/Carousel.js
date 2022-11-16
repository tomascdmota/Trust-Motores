import React from "react";
import "./Carousel.css";

export function Carousel({title, description, image}) {

    return(
    
    <div className="carousel-container">
        <div className="carousel-split">
            <div className="carousel-left">
                <div className="carousel-title">{title}</div>
                <div className="carousel-description">{description}</div>
                <p className="carousel-description2">*limitado ao stock existente*</p>
            </div>

            <div className="carousel-right">
                <img src={image} alt={title}/>
            </div>
        </div>
       
    </div>)
}