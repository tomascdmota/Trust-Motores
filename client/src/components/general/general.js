import React, { Suspense } from 'react'
import Home from '../home'

// Added lazy loading for slower internet users.
const Contact = React.lazy(() => import('../Contact'));
const Footer = React.lazy(() => import("../footer"));
const Navigation = React.lazy(() => import("../navigation.js"));
const Features = React.lazy(() => import("../Features"));

function general() {
  return (
    <div>
        <Home/>
        <Suspense fallback={<p>Loading page...</p>}>
        <Navigation/>
        <Features/>
        <Contact/>
        <Footer/>
        </Suspense>
    </div>
  )
}

export default general;