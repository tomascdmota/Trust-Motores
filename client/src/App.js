import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
import General from './components/general/general';
import Admin from './components/admin/admin';
import Campaign from "./pages/campaign/campaign";
import Services from "./pages/services/services";
import Contact from './components/Contact';
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
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/campaign" element={<Campaign/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contacts" element={<Contact/>}/>
          </Routes>
      </Router>
    )
  }
}

export default App;
