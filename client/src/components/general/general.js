import React from 'react'
import Home from '../home'
import Contact from '../Contact'
import Footer from '../footer'
import Navigation from '../navigation'
import Features from '../Features'

function general() {
  return (
    <div>
        <Home/>
        <Navigation/>
        <Features/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default general;