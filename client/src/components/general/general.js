import React, { Suspense } from 'react'
import Home from '../home'

// Added lazy loading for slower internet users.
const Contact = React.lazy(() => import('../Contact/Contact'));
const Footer = React.lazy(() => import("../Footer/footer"));
const Navigation = React.lazy(() => import("../CustomComponents/Nav/Nav"));
const Services = React.lazy(() => import("../Services/Services"));

function general() {
  return (
    <div className='general-body'>
       <Suspense fallback={<p>Loading page...</p>}>
        <Navigation/>
        <Home/>
        <Services/>
        <Contact/>
        <Footer/>
        </Suspense>
    </div>
  )
}

export default general;