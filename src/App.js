import './App.css';
import React, {Component} from 'react';
import JSONData from './data/data.json';
import './css/style.css';
import Nav from './components/navigation';
import Home from './components/home'
import Home2 from './components/home2'
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
      </>
    )
  }
}

export default App;
