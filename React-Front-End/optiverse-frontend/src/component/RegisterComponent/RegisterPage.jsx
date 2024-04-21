import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterPage.css'
import { MdEmail } from "react-icons/md";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";
import { addTodo } from '../../services/AuthService'
import { ToastContainer, toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";  
import 'react-toastify/dist/ReactToastify.css';


const RegisterPage = () => {

  const[username , setUsername] = useState('');
  const[email , setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[acceptTerms, setAcceptTerms] = useState(false)//only true or false
  const[show, setShow] = useState(false);//this is for password show and unshow

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

    validatePassword(password)//password validation

    if(emailInput.validity.valid){
      const register = {
        u_email: email,
        u_pass: password,
        u_uname: username
      }
      console.log(register);

      if(!acceptTerms) {
        toast.error('Please accept all the terms and conditions.')
        return;
      }
      
      addTodo(register).then((response) => {
        toast.success("Registered Successfully");
        console.log(response.data);
        navigate('/login')
      }).catch(error => {
        toast.error('User is already Register')
        console.error(error);
      })
    }
    else{
      toast.error('Please Enter a valid Email')
      // setInputErrorMessage('Please Enter a valid Email');
    }

    if(!acceptTerms){//this has to be after the handleRegistration function so that both email error and accept terms both will work!
      toast.error("Please accept all terms and conditions.")
      return;
    }

  }

  // This part is for checking password's strength 
  const isStrongPassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };
  const validate = (password) => {
    const isStrong = isStrongPassword(password);
    if(isStrong){ 
      toast.success("Is Strong Password");
    }
    else{
      toast.error("Password is not Strong");
    }
    return isStrong; // return the result
  }

  function validatePassword(password) {
    // Check for minimum length
    if (password.length < 8) {
      toast.error("Password is too short. It should be at least 8 characters.");
      return false;
    }
  
    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
      toast.error("Password should contain at least one uppercase letter.");
      return false;
    }
  
    // Check for lowercase letter
    if (!/[a-z]/.test(password)) {
      toast.error("Password should contain at least one lowercase letter.");
      return false;
    }
  
    // Check for number
    if (!/[0-9]/.test(password)) {
      toast.error("Password should contain at least one number.");
      return false;
    }
  
    // Check for special character
    if (!/[!@#$%^&*]/.test(password)) {
      toast.error("Password should contain at least one special character.");
      return false;
    }
  
    // If all checks pass
    toast.success("Password is strong.");
    return true;
  }


  const handleShow = () => {
    setShow(!show)
  }
  

  return (
    <div className='gradient-background'>
      <div className='container' >
        <div className='wrapper1'>
        <form className='form'> 
          <h1>Register</h1>

          <div className='input-box'>
            <input type='email' placeholder='Enter Username'
            name='username' value={username} onChange={ (e) => setUsername(e.target.value) }
            ></input>
            <FaUser  className='icon'/>
          </div>

          <div className='input-box'>
            <input type='email' placeholder='Enter Your Email' id='email'
            name='email' value={email} onChange={ (e) => setEmail(e.target.value) }
            ></input>
            <MdEmail className='icon'/>
          </div>

          <div className='input-box'>
            <input type={show? "text" : "password" } placeholder='Enter Your Password'
            name='password' value={password} onChange= { (e) => setPassword(e.target.value)} //  {(e) => validate(e.target.value)}
            ></input>
            <label onClick={handleShow} >  {show ? <HiEyeSlash className='icon'/> : <HiMiniEye className='icon'/>} </label>
            {/* {passErrorMessage && <p style={{ color: 'white' }}>{passErrorMessage}</p>} */}
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
          </div>

          <button 
          onClick={ (e) => handleRegistration(e) }>Register</button>
          <div className='register-link' >
            <p>Already have an account? <a href='/login'>Login</a></p>
          </div>

        </form>
      </div>
    </div>
    <ToastContainer />
  </div>
  )
}

export default RegisterPage;