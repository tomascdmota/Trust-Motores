import React from "react";
import Sidebar from "../sidebar/sidebar";
import "./Analytics.css";


export default function Analytics() {
    return(

        <div className="analytics">
            <div className="row">
                <div id="sidebar"><Sidebar/></div>
                <div id="analytics-component"><h1>alaytics tab</h1></div>
            </div>
        </div>
    )
}