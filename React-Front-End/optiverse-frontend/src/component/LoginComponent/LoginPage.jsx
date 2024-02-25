import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/index.css'
import './LoginPage.css'
import { FaUser, FaLock } from 'react-icons/fa'
import { getTodo } from '../../services/AuthService'


const LoginPage = () => {

  const[email , setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  function handlelogin(e){
      e.preventDefault();
      
      const register = {email, password}
      console.log(register);
    
      getTodo(register).then((response) => {
          console.log(response.data);
          navigate('/home-page')
      }).catch(error => {
          setErrorMessage('User is Not Registered');
          console.error(error);
      })
  }

  return (
    <div className='wrapper'>
      <form action=''> 
        <h1>Login</h1>
        <div className='input-box'>
          <input type='email' placeholder='Enter Email' required
          name='email' value={email} onChange={ (e) => setEmail(e.target.value)}
          ></input>
          {/* Your form goes here */}
          {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Enter Password' required
          name='password' value={password} onChange={ (e) => setPassword(e.target.value)}></input>
          <FaLock className='icon'/>
        </div>

        <div className='remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot Password</a>
        </div>

        <button onClick={ (e) => handlelogin(e)}>Login</button>
        <div className='register-link'>
          <p>Don't have an account? <a href='/register'>Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage