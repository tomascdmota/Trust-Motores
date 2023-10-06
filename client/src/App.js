import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
<<<<<<< HEAD
import General from './components/general/general.js';
import Campaign from "./pages/campaign/campaign.js";
import Services from "./pages/services/services.js";
import Contact from './pages/contact/contact.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
=======
import General from './components/general/general';
import Admin from './components/admin/admin';
import Campaign from "./pages/campaign/campaign";
import Services from "./pages/services/services";
import Contact from './pages/contact/contact';
import Panel from './components/admin/panel/panel';
import Home from './components/admin/panel/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Mail from './components/admin/panel/Mail/Mail';
import Analytics from './components/admin/panel/Analytics/Analytics';
import Dashboard from '@mui/icons-material/Dashboard';
>>>>>>> origin/master

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
<<<<<<< HEAD
          <Route path="/campaign" element={<Campaign/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contacts" element={<Contact/>}/>
=======
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/campaign" element={<Campaign/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contacts" element={<Contact/>}/>
          <Route path="/panel" element={<Panel/>}/>
          <Route path="/panel/home" element={<Home/>}/>
          <Route path="/panel/mailbox" element={<Mail/>}/>
          <Route path="/panel/analytics" element={<Analytics/>}/>
          <Route path="/panel/dashboard" element={<Dashboard/>}/>
>>>>>>> origin/master
          </Routes>
      </Router>
    )
  }
}

export default App;
