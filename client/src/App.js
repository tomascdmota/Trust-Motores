import './App.css';
import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
import Home from './components/home'
import ContactForm from './components/Contact.js';
import Footer from './components/footer';
import Navigation from './components/navigation';
import Features from './components/Features';
import Admin from './components/admin/admin';
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
      <div>
            <Navigation/>
            <Home/>
            <Features/>
            <ContactForm/>
            <Footer/>
            
      </div>,
      <Router>
        <Routes>
          <Route path="/" element="default"/>
          <Route path="/admin" element={<Admin/>}/>
          </Routes>
      </Router>
    )
  }
}

export default App;
