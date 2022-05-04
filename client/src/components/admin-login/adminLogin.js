import React from 'react';

function adminLogin() {

    const handleSubmit = async(e) => {

    }
    return (
        <div>
            <h1 className="login-title">Login</h1>
            <form id="login-form" method="post" onSubmit={e => handleSubmit()}>

            </form>
        </div>
    )
}

export default adminLogin;
