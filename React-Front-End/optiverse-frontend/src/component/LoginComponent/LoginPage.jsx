import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { FaUser, FaLock, FaLockOpen } from 'react-icons/fa';
import { getTodo } from '../../services/AuthService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

  const[email , setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[show, setShow] = useState(false);//this is for password show and unshow
  const navigate = useNavigate();

  useEffect(() => {
    
    if (typeof window.sessionStorage !== undefined) {
      if (sessionStorage.getItem("login")) {
        navigate('/home-page');
      }
    } 
  
  }, [])

  function handlelogin(e){
      e.preventDefault();
      
      const LoginDetails = {
        u_email: email,
        u_pass: password
      }
      console.log(LoginDetails);
    
      getTodo(LoginDetails).then((response) => {
          console.log(response.data);
          const storedSessionData = sessionStorage.setItem('login' , true);
          navigate('/home-page');
      }).catch(error => {
          toast.error('Email or Password is incorrect')
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
        <ToastContainer/>
        <div className='wrapper'>
        <form className='form'> 
          <h1>Login</h1>

          <div className='input-box'>
            <input type='email' placeholder='Enter Email' required
            name='email' value={email} onChange={ (e) => setEmail(e.target.value)}
            ></input>
            <FaUser className='icon'/>
          </div>

          <div className='input-box'>
            <input type={show? "text" : "password" } placeholder='Enter Password' required
            name='password' value={password} onChange={ (e) => setPassword(e.target.value)}></input>
            <label onClick={handleShow} > {show ? <FaLockOpen className='icon'/> : <FaLock className='icon'/>} </label>
          </div>


          <div className='remember-forgot'>
            <label><input type='checkbox'/>Remember me</label>
            <a href='/fp'>Forgot Password</a>
          </div>

          <button onClick={ (e) => handlelogin(e)}>Login</button>
          <div className='register-link'>
            <p>Don't have an account? <a href='/register'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LoginPage