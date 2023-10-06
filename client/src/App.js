import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
import General from './components/general/general.js';
import Campaign from "./pages/campaign/campaign.js";
import Services from "./pages/services/services.js";
import Contact from './pages/contact/contact.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export class App extends Component {
  state = {
    landingPageDats: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JSONData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<General/>}/>
          <Route path="/campaign" element={<Campaign/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contacts" element={<Contact/>}/>
          </Routes>
      </Router>
    )
  }
}

export default App;
