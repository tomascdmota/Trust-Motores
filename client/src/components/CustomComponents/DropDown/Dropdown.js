import React from "react";
import "./Dropdown.css";

const Dropdown = ({ options, onValueChange }) => {
    const handleSelectChange = (e) => {
      const selectedValue = e.target.value;
      onValueChange(selectedValue); // Call the callback with the selected value
    };
  
    return (
      <select onChange={handleSelectChange}>
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    );
  };
  
  export default Dropdown;
