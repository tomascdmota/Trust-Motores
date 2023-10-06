import React from "react";
import Sidebar from "../sidebar/sidebar";
import "./Mail.css";

export default function Mail () {
    
    return(
        <div className="mail">
            <div className="row">
                <div id="sidebar"><Sidebar/></div>
                <div><h1>this is the mail component</h1></div>
            </div>
           
        </div>
    )
};