import React, {useState, useEffect} from 'react'
import jsonData from '../data/data.json'
import '../css/navigationmaintenance.css'

const NavigationMaintenance = () => {

    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);


    return (
        <div>
        <nav className="navbar-maintenance">
        <h1 href="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <b>Trust Motores</b>
                </h1>
                <div className='menu-icon' onClick={handleClick}>
          </div>
            <div className="navbar-container">
              
          <ul className={click ? 'nav-menu-maintenance active' : 'nav-menu-maintenance'}>
            
            
            <li className='nav-item'>
              <a
                href='#contact'
                className='nav-links'
                onClick={closeMobileMenu}>
                {jsonData.Navigation.contacts}
              </a>
            </li>

          </ul>
          
          </div>
          <button href="#contact"
              className="qbtn"
              onClick={closeMobileMenu}>
                {jsonData.Navigation.getquote}
              </button>
      </nav>
        </div>
    )
}

export default NavigationMaintenance;
