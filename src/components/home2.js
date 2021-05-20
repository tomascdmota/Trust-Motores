import React, {useState} from 'react'
import {SliderData} from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Home2 =({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1 )
    }

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    
    return(
    <section className="home">
        <div className="row">
                <div className="column-left">
                        <h1>left</h1>
                </div>
                <div className="column-right">
                <section className="slider">
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                        {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} className="image" alt=""/>)}
                            
                        </div>
                            ) 
                        })}
                        </section>
                </div>
        </div>
    </section>
    )
}

export default Home2;
