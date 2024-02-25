import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import LoginPage from './component/LoginComponent/LoginPage';
import RegisterPage from './component/RegisterComponent/RegisterPage';
import ForgotPassword from './component/ForgotPasswordComponent/ForgotPassword'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
            //http://localhost:8080 agar url /home-page hai to ye component hit hoga
            <Route path='/home-page' element = { <HomePage/> }></Route>
            //http://localhost:8080 agar url /login to ye component hit hoga
            <Route path='/login' element={ <LoginPage/> }></Route>
            //http://localhost:8080 agar url /register to ye component hit hoga
            <Route path='/register' element={ <RegisterPage/> }></Route>
            //http://localhost:8080 agar url /fp to ye component hit hoga
            <Route path='/fp' element={ <ForgotPassword/> }></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;