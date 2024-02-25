import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/index.css'
import './RegisterPage.css'
import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";
import { addTodo } from '../../services/AuthService'


const RegisterPage = () => {

  const[email , setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[errorMessage, setErrorMessage] = useState('')
  const[inputErrorMessage, setInputErrorMessage] = useState('')
  const[acceptTerms, setAcceptTerms] = useState(false)//only true or false
  const[acceptTermsMessage, setAcceptTermsMessage] = useState('')//this will display the message of the respective checkbox

  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setAcceptTerms(current => !current);//current = previous values, kuch bhi naam desakh te hai
  };

  useEffect(() => {
    console.log(acceptTerms);
  }, [acceptTerms]);

  const emailInput = document.getElementById('email')

  const navigate = useNavigate();

  function handleRegistration(e){
    e.preventDefault();

    if(emailInput.validity.valid){
      const register = {email, password}
      console.log(register);
    
      addTodo(register).then((response) => {
        console.log(response.data);
        navigate('/login')
      }).catch(error => {
        setErrorMessage('User is already Register');
        console.error(error);
      })
    }
    else{
      setInputErrorMessage('Please Enter a valid Email');
    }

    if(!acceptTerms){//this has to be after the handleRegistration function so that both email error and accept terms both will work!
      setAcceptTermsMessage('Please accept all the terms and conditions.')
      return;
    }

  }

  return (
    <div className='wrapper'>
      <form> 
        <h1>Register</h1>
        
        <div className='input-box'>
          <input type='email' placeholder='Enter Your Email' id='email'
          name='email' value={email} onChange={ (e) => setEmail(e.target.value) }
          ></input>
          {/* Your form goes here */}
          {errorMessage && <p style={{ color: 'white' }}>{errorMessage}</p>}
          {inputErrorMessage && <p style={{ color: 'white' }}>{inputErrorMessage}</p>}
          
          <MdEmail className='icon'/>
        </div>

        <div className='input-box'>
          <input type='password' placeholder='Enter Your Password'
          name='password' value={password} onChange={ (e) => setPassword(e.target.value)}
          ></input>
          <HiMiniEye  className='icon'/>
          {/* <HiEyeSlash/> THIS PART NEEDS TO BE IMPLEMENTED*/}
        </div>

        <div className='remember-forgot'>
          <label>
            <input 
            type="checkbox"
            name="acceptTerms"
            id='acceptTerms'
            value={acceptTerms}
            onChange={handleChange}
            />Accept All Terms & Conditions
          </label>
          {acceptTermsMessage && <p style={{ color: 'white' }}>{acceptTermsMessage}</p>}
        </div>

        <button 
        onClick={ (e) => handleRegistration(e) }>Register</button>
        <div className='register-link'>
          <p>Already have an account? <a href='/login'>Login</a></p>
        </div>

      </form>
    </div>
  )
}

export default RegisterPage