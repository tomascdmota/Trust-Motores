import React from 'react'
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
}

export default services