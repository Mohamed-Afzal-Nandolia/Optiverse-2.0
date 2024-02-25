import React from 'react'
import './SignInPage/SignInPage.css';

const NavBar = () => {
  function loginButton(){

  }
  function register(){

  }
  function myMenuFunction(){
    
  }

  return (
    <div>
      <div className="wrapper">
            <nav className="nav">
                <div className="nav-logo">
                    <p>OptiVerse</p>
                </div>
                <div className="nav-button">
                  <button className="btn white-btn" id="loginBtn" onClick={loginButton}>Sign In</button>
                  <button className="btn" id="registerBtn" onClick={register}>Sign Up</button>
                </div>
                <div className="nav-menu-btn">
                  <i className="bx bx-menu" onClick={myMenuFunction}></i>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavBar