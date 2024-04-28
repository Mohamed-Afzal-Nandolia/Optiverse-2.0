import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import  { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';//useHistory,


const North = () => {

  const [buttonText, setButtonText] = useState('Log Out');
  // const history = useHistory();
  const location = useLocation();


  useEffect(() => {
      // Update button text based on current URL path
      const path = location.pathname;
      if (path === '/login') {
        setButtonText('Register');
      } else if (path === '/register') {
        setButtonText('Login');
      } else if (path === '/home-page') {
        setButtonText('Log Out');
      } 
    }, [location.pathname]);


  function setActive(e) {
      e.preventDefault();
      document.querySelectorAll('.link').forEach((link) => {
          link.classList.remove('active');
      });
      e.target.classList.add('active');
  }


  const navigate = useNavigate()

  const handleLogoutClick = () => {
      if(buttonText === "Register"){
          navigate('/register')
      }
      else if(buttonText === "Login"){
          navigate('/login')
      }
      else{
          logout()
      }
   
  }


  function logout() {
  // Clear the user's authentication state
  localStorage.removeItem('user');
  sessionStorage.clear();
  // Redirect the user to the login page
  navigate('/login')
}

  // return (
  //     <div>
  //         {/* <nav className="nav">
  //             <div className="nav-logo">
  //                 <p>OptiVerse</p>
  //             </div>
  //             <div className="nav-menu" id="navMenu">
  //                 <ul>
  //                     <li><a href="#" className="link active" id="home" onClick={setActive}>Home</a></li>
  //                     <li><a href="#" className="link" onClick={setActive}>Topics</a></li>
  //                     <li><a href="#" className="link" onClick={setActive}>Your Posts</a></li>
  //                     <li><a href="#" className="link" onClick={setActive}>Messages</a></li>
  //                     <li><a href="#" className="link" onClick={setActive}>Notifications</a></li>
  //                     <li><a href="#" className="link" id="search" onClick={(e) => {setActive(e); mySearch();}}>Search <i className='bx bx-search-alt-2'></i></a></li>
  //                 </ul>
  //             </div>
  //             <div className="nav-button">
  //                 <button className="btn white-btn" onClick={handleLogoutClick}>{buttonText}</button>
  //             </div>
  //         </nav> */}
  //     </div>
  // );

  function mySearch() {
      // var searchBox = document.getElementById('search');
      // searchBox.style.visibility = 'hidden';
  }

  function login() {

  }
  return (
    <div className='cali nav'>
      {/* <NavBar currentPage="login"/> */}
      
              <div className="nav-logo">
                  <p>OptiVerse</p>
              </div>
              <div className="nav-menu" id="navMenu">
                  <ul>
                      <li><a href="#" className="link active" id="home" onClick={setActive}>Home</a></li>
                      <li><a href="#" className="link" onClick={setActive}>Topics</a></li>
                      <li><a href="#" className="link" onClick={setActive}>Your Posts</a></li>
                      <li><a href="#" className="link" onClick={setActive}>Messages</a></li>
                      <li><a href="#" className="link" onClick={setActive}>Notifications</a></li>
                      <li><a href="#" className="link" id="search" onClick={(e) => {setActive(e); mySearch();}}>Search <i className='bx bx-search-alt-2'></i></a></li>
                  </ul>
              </div>
              <div className="nav-button">
                  <button className="btn white-btn" onClick={handleLogoutClick}>{buttonText}</button>
              </div>

    </div>
  )
}

// function NavBar() {

//   const [buttonText, setButtonText] = useState('Log Out');
//   // const history = useHistory();
//   const location = useLocation();


//   useEffect(() => {
//       // Update button text based on current URL path
//       const path = location.pathname;
//       if (path === '/login') {
//         setButtonText('Register');
//       } else if (path === '/register') {
//         setButtonText('Login');
//       } else if (path === '/home-page') {
//         setButtonText('Log Out');
//       } 
//     }, [location.pathname]);


//   function setActive(e) {
//       e.preventDefault();
//       document.querySelectorAll('.link').forEach((link) => {
//           link.classList.remove('active');
//       });
//       e.target.classList.add('active');
//   }


//   const navigate = useNavigate()

//   const handleLogoutClick = () => {
//       if(buttonText === "Register"){
//           navigate('/register')
//       }
//       else if(buttonText === "Login"){
//           navigate('/login')
//       }
//       else{
//           logout()
//       }
   
//   }


//   function logout() {
//   // Clear the user's authentication state
//   localStorage.removeItem('user');
//   sessionStorage.clear();
//   // Redirect the user to the login page
//   navigate('/login')
// }

//   return (
//       <div>
//           {/* <nav className="nav">
//               <div className="nav-logo">
//                   <p>OptiVerse</p>
//               </div>
//               <div className="nav-menu" id="navMenu">
//                   <ul>
//                       <li><a href="#" className="link active" id="home" onClick={setActive}>Home</a></li>
//                       <li><a href="#" className="link" onClick={setActive}>Topics</a></li>
//                       <li><a href="#" className="link" onClick={setActive}>Your Posts</a></li>
//                       <li><a href="#" className="link" onClick={setActive}>Messages</a></li>
//                       <li><a href="#" className="link" onClick={setActive}>Notifications</a></li>
//                       <li><a href="#" className="link" id="search" onClick={(e) => {setActive(e); mySearch();}}>Search <i className='bx bx-search-alt-2'></i></a></li>
//                   </ul>
//               </div>
//               <div className="nav-button">
//                   <button className="btn white-btn" onClick={handleLogoutClick}>{buttonText}</button>
//               </div>
//           </nav> */}
//       </div>
//   );

//   function mySearch() {
//       // var searchBox = document.getElementById('search');
//       // searchBox.style.visibility = 'hidden';
//   }

//   function login() {

//   }
// }

export default North
