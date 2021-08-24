import React, {useState, useEffect, Component} from 'react'
import jsonData from '../data/data.json'
import Modal from './Modal.js';

class Navigation extends Component {

  constructor() {
    super();
    this.state = {
      //This hides the modal until the user prompts it to open
      show: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({show: true});
  }

  hideModal = () => {
    this.setState({show: false});
  }

  render(){
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
          <Modal show={this.state.show} handleClose={this.hideModal} ></Modal>
          <button href="#getqt"
              id="mybtn"
              type="button"
              onClick={this.showModal}
              className="qbtn">
                {jsonData.Navigation.getquote}
              </button>
      </nav>
      
        </div>
    )
}
}

export default Navigation;
