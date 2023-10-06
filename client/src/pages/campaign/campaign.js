/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState} from 'react';
import './campaign.css';
import Modal from "../../components/CustomComponents/Modal/Modal.js";
import Navigation from"../../components/CustomComponents/Nav/Nav.js";
import Footer from "../../components/Footer/footer.js"
import GetQuote from '../../components/CustomComponents/GetQuote/getquote.js';

import {useData} from "../../utils/usePosts.js";
import { Carousel } from '../../components/CustomComponents/Carousel/Carousel.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Campaign()  {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModal, setShowModal] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [posts]= useData();

  const showQuoteFunction = () => {
    setShowQuote(!showQuote)
    console.log(showQuote);
}
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
        image={post.fields.image.fields.file.url}
        modal={showQuoteFunction}/>
      ))}
      </Slider>

      {showQuote ? <GetQuote handleClose={showQuoteFunction}/> : null}
     
    
    </div>
    <Footer/>
    
    {showModal ? <Modal show={showModal} handleClose={closeModal}/> :null}
    </div>
  )
}
