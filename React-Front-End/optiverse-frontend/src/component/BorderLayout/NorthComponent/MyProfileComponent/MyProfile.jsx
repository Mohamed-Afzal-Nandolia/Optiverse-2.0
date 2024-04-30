import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';//useHistory,

const MyProfile = () => {
  // State to manage the visibility of the dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false); // Set initial state to true

  const handleDropdownToggle = () => {
    // Toggle the visibility of the dropdown
    setDropdownVisible(!dropdownVisible);
  };

  const handleCommunityClick = (community) => {
    // Handle click event for each community
    console.log(`Clicked on ${community}`);
    // You can add further logic here, like navigating to the selected community, etc.
  };

  // Effect to ensure dropdown is open by default on page load
  useEffect(() => {
    setDropdownVisible(false);
  }, []);

  const navigate = useNavigate()
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
  return (
    <div style={styles.dropdownContainer} onClick={handleDropdownToggle}>
      <div style={styles.dropdownHeader}>
        <span style={{ color: 'white' , fontSize: '20px' , userSelect: 'none', padding: '0.4em' }}>My Profile</span>
        
      </div>
      {/* Dropdown content */}
      {dropdownVisible && (
        <div style={styles.dropdownContent}>
          
          <div className="nav-button">
            <button className="btn white-btn" onClick={handleLogoutClick}>{buttonText}</button>
        </div>
          
        </div>
      )}
    </div>
  );
};

// Add your existing CSS styles here
const styles = {
  dropdownContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  dropdownHeader: {
    cursor: 'pointer',
    borderRadius: '4px',
  },
  dropdownContent: {
    position: 'absolute',
    top: '0',
    marginTop: '40px', // Adjust this value according to the height of your dropdown header
    left: 0,
    minWidth: '160px',
    // padding: '5px',
    borderRadius: '4px',
    zIndex: 6,
    // display: 'flex', // Use flexbox for alignment
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
  },
  communityItem: {
    // padding: '1px',
    cursor: 'pointer',
  },
  navButton: {
    width: '100%', // Take up full width of the container
    display: 'flex', // Use flexbox for alignment
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
    marginTop: '1em',
  },
};


export default MyProfile;
