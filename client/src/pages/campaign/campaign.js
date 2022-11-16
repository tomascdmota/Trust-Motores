import React, { useState} from 'react';
import './campaign.css';
import Modal from "../../components/CustomComponents/Modal/Modal";
import Navigation from"../../components/CustomComponents/Nav/Nav";
import Footer from "../../components/Footer/footer"
import GetQuote from '../../components/CustomComponents/GetQuote/getquote';

import {useData} from "../../utils/usePosts.js";
import { Carousel } from '../../components/CustomComponents/Carousel/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function campaign() {

  const [showModal, setShowModal] = useState(false);
  const [posts]= useData();

  const closeModal = () => {
      setShowModal(false);
  };

  return( 
  <div className='campaign-body'>
    <Navigation/>
    
    <div className='body-div'>
      <Slider>
        {posts.map(post => (
        <Carousel title={post.fields.weeklyCampaign}
        description={post.fields.description}
        image={post.fields.campaignImage}/>
      ))}
      </Slider>
      <div className='getquote-carousel'>
        <GetQuote/>
      </div>
      
    </div>
    <Footer/>
    
    {showModal ? <Modal show={showModal} handleClose={closeModal}/> :null}
    </div>
  )
}
