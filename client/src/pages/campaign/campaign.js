import React from 'react';
import './campaign.css';

export default function campaign() {
  return (
    <div className='body-div'>
      <div className='title'>
       <h1>CAMPAIGN</h1>
      </div>
    
    <div className="campaign-body">
      
      <div className="split left">
        <div className='centered'>
        <h1 className="campaign-title"><b>10% off of Renault Engines</b></h1>
          <p className="title1">Oferecemos: </p>
          <ul className='list'>
            <li>&bull; 12 meses de garantia sem limites de kms</li>
            <li>&bull; Possibilidade de crédito</li>
            <li>&bull; Reconstrução do seu motor</li>
            <li>&bull; Portes de envio em vendas superiores a 2000€</li>
          </ul>

          <button className='get-in-touch-button'>Entrar em contacto</button>
        </div>
      </div>

      <div className="split right">
        <div className='centered'>
          <img src='https://res.cloudinary.com/dnho57ne8/image/upload/v1667817195/honda_PNG10347_i6rtgf.png'/>
         
        </div>

        
      </div>
      
    </div>

    </div>
  )
}
