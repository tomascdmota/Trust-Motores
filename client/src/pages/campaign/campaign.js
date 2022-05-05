import React from 'react';
import Navigation from "../../components/navigation-pages/Navigationpages"
import './campaign.css';

export default function campaign() {
  return (
    <div className='body-div'>
    <Navigation/>
    <div className="campaign-body">
     

      <div className="split left">
        <div className='centered'>
         <img src='../../assets/small-pistons-2-3-min.gif' width="100%"/>
        </div>
      </div>

      <div className="split right">
        <div className='centered'>
          <h1 className="offer"><b>O que oferecemos:</b></h1>
          <ul className='list'>
            <li>&bull; 12 meses de garantia sem limites de kms</li>
            <li>&bull; Possibilidade de crédito</li>
            <li>&bull; Reconstrução do seu motor</li>
            <li>&bull; Portes de envio em vendas superiores a 2000€</li>
          </ul>
        </div>
      </div>
      
    </div>

    

    
    
    
    </div>
  )
}
