import React, {useState} from "react";
import './sidebar.css';
import {SidebarData} from "./SidebarData";
import MenuIcon from '@mui/icons-material/Menu';


export default function Sidebar() {


    const [isToggled, setIsToggled] = useState(true);

    // Some logic to toggle/close sidebar
    const toggleSidebar = () => {
        console.log(isToggled);
        setIsToggled(!isToggled);
    }
 
    return(
        <div className="sidebar">
            <ul>
                <li
                className="row">
                     <div id="icon" onClick={toggleSidebar}><MenuIcon className="menu-icon"/></div>
                        <div id="title">Menu</div>
                    
                </li>
               
            {SidebarData.map((val, key) => {
                // here we are gonna map through the array in order to display the data on the sidebar
                return <li key={key} 
                className="row"
                id={window.location.path == val.link ? "active" : ""}
                onClick={() => {window.location.pathname = "/panel" + val.link}}>
                    {""}
                        
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
            })} 
            </ul>
        </div>
    )
}