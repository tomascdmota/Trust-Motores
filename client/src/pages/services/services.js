import React from 'react'
<<<<<<< HEAD
import Navigation from"../../components/CustomComponents/Nav/Nav.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./services.css"
import Maintenance from "../../components/maintenance.js"


function services() {
    return (
    
        <div className='services-container'>
              <Navigation/>
              <Maintenance/>
           </div>
    
          )
=======
import Navigation from"../../components/CustomComponents/Nav/Nav";

function services() {
    return (<div>
              <Navigation/>
              <div>services</div>
           </div>
    
  )
>>>>>>> origin/master
}

export default services