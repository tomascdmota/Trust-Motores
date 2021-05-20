import React, {useState} from 'react'
import {SliderData} from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Carousel from './Carousel';

const Home =({slides}) => {

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
       <div class='some-page-wrapper'>
        <div class='home-row'>
            <div class='home-column'>
                <Carousel>
                    <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1607987478/Desportivos/rolls_psvbmq.jpg" placeholder="rr"/>
                    <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1607987478/Desportivos/vintage_oqo1rn.jpg"/>
                    <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1607987478/Desportivos/vintage_oqo1rn.jpg"/>
                    <img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1607987478/Desportivos/vintage_oqo1rn.jpg"/>
                </Carousel>
            </div>
            <div class='home-column-right'>
                Some Text in Column Two
            </div>
        </div>
        </div>
    </section>
    )
}

export default Home;
