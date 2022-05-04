import React, {Component} from "react";
import Home from "../home";
import ContactForm from "../Contact";
import Footer from "../footer";
import Navigation from "../navigation";
import Features from "../Features";


export class general extends Component{
    render(){
        return(
            <div>
            <Navigation/>
            <Home/>
            <Features/>
            <ContactForm/>
            <Footer/>
      </div>
        )
    }
}

export default general;