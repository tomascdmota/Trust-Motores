import React, {useState, useEffect, Component} from 'react'
import jsonData from '../data/data.json'
import Modal from './Modal.js';
import {Link} from "react-router-dom"

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
              <h1 className="navbar-logo">
                  <b>Trust Motores</b>
              </h1>

            <div className="navbar-container">
              
          <ul className={'nav-menu'}>
            
            <Link to="/campaign">
              <li className='nav-item'>
                <a
                  className='nav-links'>
                  {jsonData.Navigation.campaign}
                </a>
              </li>
            </Link>

            <Link to="/services">
              <li className='nav-item'>
                <a
                  className='nav-links'>
                  {jsonData.Navigation.services}
                </a>
              </li>
              </Link>

              <Link to="/contacts">
                <li className='nav-item'>
                    <a
                      className='nav-links'>
                      {jsonData.Navigation.contacts}
                    </a>
                </li>
              </Link>

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
