import React from 'react'
import "./admin.css";

function admin() {
  return [

    
    <div className="page">
      <div className='title-body'>
              <h1 className="title">Administrator Exclusive Page</h1>
            </div>
      <div className='admin-body'>
            
              <form action="/login" method="POST">
                <legend>Credentials</legend>
                <div className='form-container'>
                  <label for="user-name">Username :</label>
                  <input name="user-name" type="email" placeholder='Email' required autoFocus/>
                  <label for="password">Password :</label>
                  <input name="password" type="password" placeholder="Password" required/>
                </div>
                <div>
                  <button onClick="/login" type="submit" value="Login">Submit</button>
                </div>
              </form>
      </div>
      </div>
  ]
}

export default admin