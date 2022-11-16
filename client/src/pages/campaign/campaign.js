import React, { useState} from 'react';
import './campaign.css';
import Modal from "../../components/CustomComponents/Modal/Modal";
import Navigation from"../../components/CustomComponents/Nav/Nav";
import {useData} from "../../utils/usePosts.js";


export default function campaign() {

  const [showModal, setShowModal] = useState(false);
  const [posts, isLoading] = useData();

  const closeModal = () => {
      setShowModal(false);
  };

  const modal = () => {
      setShowModal(true);
  }

  return posts.map ( post  => ( 
  <div>
    <Navigation/>
    <div className='body-div'>
      <div className='title'>
       <h1>{post.fields.weeklyCampaign}</h1>
      </div>
    
    <div className="campaign-body">
      
      <div className="split left">
        <div className='centered'>
        <h1 className="campaign-title"><b>Oferecemos:</b></h1>
          <ul className='list'>
            <p>{post.fields.description}</p>
            <li>&bull; 12 meses de garantia sem limites de kms</li>
            <li>&bull; Possibilidade de crédito</li>
            <li>&bull; Reconstrução do seu motor</li>
            <li>&bull; Portes de envio em vendas superiores a 2000€</li>
          </ul>

          <button className='get-in-touch-button' onClick={modal}>Entrar em contacto</button>
        </div>
      </div>

      <div className="split right">
        <div className='centered'>
          <img src={post.fields.campaignImage} alt="campaign"/>
         
        </div>

        
      </div>
      
    </div>
    </div>
    {showModal ? <Modal show={showModal} handleClose={closeModal}/> :null}
    </div>
  )
  )
}
