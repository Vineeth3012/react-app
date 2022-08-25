import React from 'react';

const  Login=()=>{
return(
    <div>
        <label>UserName</label>
        <input type={email} placeholder="Enter the UserName"/>
        <label>Password</label>
        <input type={password} placeholder="Enter the Password"/>
        <button>Submit</button>
    </div>
)
}

export default Login;