import './App.css';
import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
import Home from './components/home'
import ContactForm from './components/Contact.js';
import Footer from './components/footer';
import Navigation from './components/navigation';
import GetQuote from './components/getquote';

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
      <GetQuote/>
      <ContactForm/>
      <Footer/>
      </div>
    )
  }
}

export default App;
