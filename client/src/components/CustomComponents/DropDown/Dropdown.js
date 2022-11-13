import React from "react";
import "./Dropdown.css";

const Dropdown =({options}) => 
    <select>
        {options.map((item, index) => 
            <option key={index}>{item.value}</option>
        )}
    </select>;


export default Dropdown;