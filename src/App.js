import './App.css';
import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
import Nav from './components/navigation';
import Home from './components/home'
import CountDown from './components/countdown';
import { SliderData } from './components/SliderData';

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
      <>
      <Nav/>
      <Home slides={SliderData}/>
      <CountDown/>
      <Home/>
      </>
    )
  }
}

export default App;
