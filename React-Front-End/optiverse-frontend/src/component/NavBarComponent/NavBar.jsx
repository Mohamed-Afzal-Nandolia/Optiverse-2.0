import React from 'react';
import './NavBar.css'; 

function NavBar() {

    function setActive(e) {
        e.preventDefault();
        document.querySelectorAll('.link').forEach((link) => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
    }

    return (
        <div>
            <nav className="nav">
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
                    <button className="btn white-btn" id="loginBtn" onClick={login}>Log In</button>
                </div>
            </nav>
        </div>        
    );

    function mySearch() {
        // var searchBox = document.getElementById('search');
        // searchBox.style.visibility = 'hidden';
    }

    function login() {
        // Handle login functionality
    }
}

export default NavBar;
