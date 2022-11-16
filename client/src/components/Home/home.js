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

    
    const closeModal = () => {
        setShowModal(false);
    };

    const modal = () => {
        setShowModal(true);
    }

    return(
    <section className="split">
       
            <div className='body-div'>
            <Slider>
                {posts.map(post => (
                <Carousel title={post.fields.weeklyCampaign}
                description={post.fields.description}
                image="https://res.cloudinary.com/dnho57ne8/image/upload/v1667854926/My_project_1_nudtri.png"/>
            ))}
            </Slider>
            <GetQuote/>
            </div>
        
			
            {showModal ? <Modal show={showModal} handleClose={closeModal}/> :null}
        
    </section>
    
    
    )
}
export default Home;
