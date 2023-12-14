import React from 'react'
import "./Join.css"
import { Link } from 'react-router-dom';

let user;

const Join = () => {

  const sendUser=()=>{
    user =document.getElementById("JoinInput").value;
  }
  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <div className='logo'>
        <h1>C</h1>
        <h3>hat</h3>
        <h3><br /><br />  Chat With</h3>
        <h5><br /><br /><br /><br /><br /><br />Chat App</h5>
          </div>                     
          <input placeholder='Enter Your Name' type="text" id='JoinInput'/> 
          <Link to="/chat"><button onClick={sendUser} className='JoinBtn'>Login In</button>  </Link>          
      </div>
    </div>
  )
}

export default Join
export {user}