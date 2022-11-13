import React, {useState} from 'react'
import jsonData from '../data/data.json'
import Modal from './CustomComponents/Modal/Modal.js';
import {Link} from "react-router-dom"

function Navigation() {

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
      setShowModal(false);
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
            
            <Link to="/campaign" className='nav-links'>
              <li className='nav-item'>
                <div
                  className='nav-links'>
                  {jsonData.Navigation.campaign}
                </div>
              </li>
            </Link>

            <Link to="/services"  className='nav-links'>
              <li className='nav-item'>
                <div
                  className='nav-links'>
                  {jsonData.Navigation.services}
                </div>
              </li>
              </Link>

              <Link to="/contacts" className='nav-links'>
                <li className='nav-item'>
                    <div
                      className='nav-links'>
                      {jsonData.Navigation.contacts}
                    </div>
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
