import './App.css';
import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
import Nav from './components/navigation';
import Home from './components/home'
import CountDown from './components/countdown';
import Maintenance from './components/maintenance';
import ContactForm from './components/Contact.js';
import NavigationMaintenance from './components/navigation-maintenance';
import Footer from './components/footer';

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
      <NavigationMaintenance/>
      <Maintenance/>
      <ContactForm/>
      <Footer/>
      </div>
    )
  }
}

export default App;
