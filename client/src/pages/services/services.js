import React from 'react'
import Navigation from"../../components/CustomComponents/Nav/Nav.js";
import "./services.css"
import Maintenance from "../../components/maintenance.js"


function services() {
    return (
    
        <div className='services-container'>
              <Navigation/>
              <Maintenance/>
           </div>
    
          )
}

export default services