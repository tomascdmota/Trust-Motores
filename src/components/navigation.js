import React, {useState, useEffect} from 'react'
import jsonData from '../data/data.json'

const Navigation = () => {

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
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                    GIFERMO II
                    <i class='fas fa-tree'/>
                </a>
                <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <a
                href='#services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {jsonData.Navigation.about}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#products'
                className='nav-links'
                onClick={closeMobileMenu}>
                {jsonData.Navigation.services}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#portfolio'
                className='nav-links'
                onClick={closeMobileMenu}>
                {jsonData.Navigation.portfolio}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#contact'
                className='nav-links'
                onClick={closeMobileMenu}>
                {jsonData.Navigation.contacts}
              </a>
            </li>
            <li className='nav-item'>
              <a
                href= {jsonData.Navigation.gifermo}
                className='nav-links'
                onClick={closeMobileMenu}>
               Gifermo
              </a>
            </li>

          </ul>
          <button href="#modal"
              className="qbtn"
              onClick={closeMobileMenu}>
                {jsonData.Navigation.getquote}
              </button>
          </div>
      </nav>
        </>
    )
}

export default Navigation;
