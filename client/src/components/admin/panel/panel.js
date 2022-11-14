import React, {useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './panel.css';
import Sidebar from './sidebar/sidebar';


function panel() {

    axios.defaults.withCredentials = true;

    const navigate = useNavigate();
    useEffect(() => {
        // Creates a route to get the value of session that is being sent from the backend
        axios.get("http://localhost:3001/login").then((response) => {
          console.log(response);
          if(response.data.user === false) {
            navigate("/login");
          }
        }); // Checks if the user is logged in
      }, []);
    return(
        <div className='panel'>
            <Sidebar/>
            
        </div>
    ) 
}


export default panel;