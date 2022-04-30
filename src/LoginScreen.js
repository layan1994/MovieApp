import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img className='loginScreen__logo' src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png" 
            alt="" />
    
          <button className='loginScreen__button'>Click to Add</button>
          <div className="loginScreen__gradient"/>
      </div>
    </div>
  )
}

export default LoginScreen
