import React, { Suspense } from 'react'
import Home from '../Home/home.js'

// Added lazy loading for slower internet users.
const Contact = React.lazy(() => import('../Contact/Contact.js'));
const Footer = React.lazy(() => import("../Footer/footer.js"));
const Navigation = React.lazy(() => import("../CustomComponents/Nav/Nav.js"));
const Services = React.lazy(() => import("../Services/Services.js"));

function general() {
  return (
    <div className='general-body'>
       <Suspense fallback={<p>Loading page...</p>}>
        <Navigation/>
        <Home/>
        <Services/>
        <Contact/>
        </Suspense>
    </div>
  )
}

export default general;