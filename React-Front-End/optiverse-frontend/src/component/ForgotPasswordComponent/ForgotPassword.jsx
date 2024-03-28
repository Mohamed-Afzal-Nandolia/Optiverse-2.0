import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/index.css'
import './ForgotPassword.css'
import { FaUser } from 'react-icons/fa'
import { getTodo } from '../../services/AuthService'
import { BsChatLeftTextFill } from "react-icons/bs";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";

const LoginPage = () => {

  const[email , setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[errorMessage, setErrorMessage] = useState('');
  const[show, setShow] = useState(false);//this is for password show and unshow
  const[otp, setOtp] = useState('');


  const navigate = useNavigate();

  function handlelogin(e){
      e.preventDefault();
      
      const register = {email, password}
      console.log(register);
    
      getTodo(register).then((response) => {
          console.log(response.data);
          navigate('/home-page')
      }).catch(error => {
          setErrorMessage('Email or Password is incorrect');
          console.error(error);
      })
  }

  //handle the pass show function
  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className='gradient-background'>
      <div className='container'>
        <div className='wrapper '>
          <form className='form'> 
            <h1>Reset Password</h1>

            <div className='input-box'>
              <input type='email' placeholder='Enter Existing Email' 
              name='email' value={email} onChange={ (e) => setEmail(e.target.value)}
              ></input>
              {/* Your form goes here */}
              {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
              <FaUser className='icon'/>
            </div>

            <div className='input-box'>
              <input type="text" placeholder='Enter OTP' 
              name='otp' value={otp} onChange={ (e) => setOtp(e.target.value)}></input>
              <BsChatLeftTextFill className='icon'/>
            </div>

            <div className='input-box'>
              <input type={show? "text" : "password" } placeholder='Enter new password' required
              name='password' value={password} onChange={ (e) => setPassword(e.target.value)}></input>
              <label onClick={handleShow} >  {show ? <HiEyeSlash className='icon'/> : <HiMiniEye className='icon'/>} </label>
            </div>


            {/* <div className='remember-forgot'>
              <label><input type='checkbox'/>Remember me</label>
              <a href='#'>Forgot Password</a>
            </div> */}

            <button onClick={ (e) => handlelogin(e)}>Reset</button>
            {/* <div className='register-link'>
              <p>Don't have an account? <a href='/register'>Register</a></p>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage