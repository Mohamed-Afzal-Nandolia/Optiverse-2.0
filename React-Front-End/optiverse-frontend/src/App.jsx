import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePageComponent/HomePage';
import LoginPage from './component/LoginComponent/LoginPage';
import RegisterPage from './component/RegisterComponent/RegisterPage';
import ForgotPassword from './component/ForgotPasswordComponent/ForgotPassword'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './component/NavBarComponent/NavBar';
import SessionProvider from './component/SessionProviderComponent/SessionProvider';

function App() {
  return (
    <div>
      <SessionProvider>

    
      <BrowserRouter>
      {/* <NavBar/> */}
      <NavBar currentPage="login" />
        <Routes>      
            
            //http://localhost:8080 agar url /home-page hai to ye component hit hoga
            <Route path='/home-page' element = { <HomePage /> }></Route>
            //http://localhost:8080 agar url /login to ye component hit hoga
            <Route path='/login' element={ <LoginPage/> }></Route>
            //http://localhost:8080 agar url / to ye component hit hoga
            <Route path='/' element={ <LoginPage/> }></Route>
            //http://localhost:8080 agar url /register to ye component hit hoga
            <Route path='/register' element={ <RegisterPage/> }></Route>
            //http://localhost:8080 agar url /fp to ye component hit hoga
            <Route path='/fp' element={ <ForgotPassword/> }></Route>
        </Routes>
      </BrowserRouter>
      

      </SessionProvider>
    </div>
  );
}

export default App;