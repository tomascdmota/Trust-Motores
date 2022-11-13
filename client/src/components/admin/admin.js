import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./admin.css";

function admin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();


  const login = () => {
    axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        navigate("/panel");
      }
    });
  };
  
  useEffect(() => {
    // Creates a route to get the value of session that is being sent from the backend
    axios.get("http://localhost:3001/login").then((response) => {
    if(response.data.loggedIn == true){
      navigate("/panel");  
    }  
    }); 
  }, []);

  return (

    
    <div className="page">
      <div className='title-body'>
              <h1 className="title">Administrator Exclusive Page</h1>
            </div>
      <div className='admin-body'>
            
              <form>
                <legend>Credentials</legend>
                <div className='form-container'>
                  <label for="user-name">Username :</label>
                  <input name="username" type="name" placeholder='username' required autoFocus onChange={(e) => {
                    setUsername(e.target.value);
                  }} />
                  <label for="password">Password :</label>
                  <input name="password" type="password" placeholder="Password" required onChange={(e) => {
                    setPassword(e.target.value);
                  }}/>
                </div>
                <div>
                  <button onClick={login} type="button" value="Login">Login</button>
                </div>
              </form>
              <h1>{loginStatus}</h1>
      </div>

                
      </div>
  )

}

export default admin;