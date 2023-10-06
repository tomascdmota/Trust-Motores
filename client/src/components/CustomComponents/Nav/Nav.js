import React, {useState} from 'react'
import jsonData from '../../../data/data.json'
import Modal from '../Modal/Modal.js';
import {Link} from "react-router-dom"
import './Nav.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navigationpages() {

  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(false);



  const closeModal = () => {
      setShowModal(false);
  };

  const modal = () => {
    setShowModal(!showModal);
  }

  const toggleClass = (e) => {
    setIsActive(!isActive);
  }


    return (
        <div>
        <nav className="nav" data-testid="navigation">
       
              <h1 className="navbar-logo" data-testid="navbar-logo">
                  <b>Trust Motores</b>
              </h1>
            <div className="navbar-container" data-testid="navbar-container">
         
           
           
          <ul className={isActive  ? "nav-menu show-nav" : "nav-menu"}>
          <Link to="/" className='nav-links' >
              <li className='nav-item'>
                <div
                  className='nav-links'>
                  {jsonData.Navigation.home}
                </div>
              </li>
            </Link>

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

             
          </ul>
          
          </div>
          
          <span className='menu-icon'> <MenuIcon className='menu-icon' onClick={toggleClass}/></span>
         
          <button href="#getqt"
              id="mybtn"
              type="button"
              onClick={modal}
              className="qbtn"
              data-testid="qbtn">
                {jsonData.Navigation.getquote}
              </button>
              
            
              
      </nav>
      {showModal ? <Modal show={showModal} handleClose={closeModal} /> : null}
        </div>
    )
}


export default Navigationpages;
