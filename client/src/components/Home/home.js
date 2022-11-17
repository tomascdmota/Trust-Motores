import React,{useState, lazy}  from 'react';
import "./Home.css"

import { useData } from '../../utils/usePosts';
import { Carousel } from '../CustomComponents/Carousel/Carousel';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = lazy(() => import("../CustomComponents/Modal/Modal"))
const GetQuote = lazy(() => import("../CustomComponents/GetQuote/getquote"));



const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [posts]= useData();

    const [showQuote, setShowQuote] = useState(false);

    
    const closeModal = () => {
        setShowModal(false);
    };

    const modal = () => {
        setShowModal(true);
    }

    const showQuoteFunction = () => {
        setShowQuote(!showQuote)
    }

    return(
    <section className="split">
       
            <div className='body-div'>
            <Slider>
                {posts.map(post => (
                <Carousel title={post.fields.weeklyCampaign}
                description={post.fields.description}
                image={post.fields.image.fields.file.url}
                modal={showQuoteFunction}/>
            ))}
            </Slider>
            <div className='getquote-div'>
                <GetQuote cancelar={closeModal}/>
            </div>
            
            
            </div>

            {showQuote ? <div className='mobilequote-div'><GetQuote handleClose={showQuoteFunction}/> </div>: null}
        
			
            {showModal ? <Modal show={showModal} handleClose={closeModal}/> :null}
        
    </section>
    
    
    )
}
export default Home;
