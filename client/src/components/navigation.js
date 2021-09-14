import React, {useState, useEffect, Component} from 'react'
import jsonData from '../data/data.json'
import Modal from './Modal.js';

function Navigation() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
      setShowModal(!showModal);
  };

  const modal = () => {
    setShowModal(true);
  }

    return (
        <div>
          
        <nav className="navbar">
        <h1 href="/" className="navbar-logo">
                    <b>Trust Motores</b>
                </h1>
                
            <div className="navbar-container">
              
          <ul className={'nav-menu'}>
            
            <li className='nav-item'>
              <a
                href='#campanha'
                className='nav-links'>
                {jsonData.Navigation.campaign}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#products'
                className='nav-links'>
                {jsonData.Navigation.services}
              </a>
            </li>
            
            <li className='nav-item'>
              <a
                href='#contact'
                className='nav-links'>
                {jsonData.Navigation.contacts}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href= {jsonData.Navigation.gifermo}
                className='nav-links'>
               Gifermo
              </a>
            </li>

          </ul>
          
          </div>
          {showModal ? <Modal show={showModal} handleClose={closeModal} /> : null}
          
          <button href="#getqt"
              id="mybtn"
              type="button"
              onClick={modal}
              className="qbtn">
                {jsonData.Navigation.getquote}
              </button>
      </nav>
      
        </div>
    )
}


export default Navigation;
