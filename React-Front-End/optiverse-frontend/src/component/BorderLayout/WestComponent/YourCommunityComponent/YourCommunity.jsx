import React, { useState, useEffect } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


const YourCommunity = () => {
  // State to manage the visibility of the dropdown
  const [dropdownVisible, setDropdownVisible] = useState(true); // Set initial state to true

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
    setDropdownVisible(true);
  }, []);

  return (
    <div style={styles.dropdownContainer}>
      <div onClick={handleDropdownToggle} style={styles.dropdownHeader}>
      <span style={{ color: 'white' , fontSize: '20px' }}>Recent Communities</span>
        {/* Arrow icon to indicate dropdown */}
        <span>{dropdownVisible ? 
            <IoIosArrowDropupCircle size={40} style={{ fill: 'white' , padding: '5px' , top: 0 , left: 0}} /> 
                : 
            <IoIosArrowDropdownCircle size={40} style={{ fill: 'white' , padding: '5px' , top: 0 , left: 0}} />}
        </span>
      </div>
      {/* Dropdown content */}
      {dropdownVisible && (
        <div style={styles.dropdownContent}>
          {/* List of communities */}
          <div onClick={() => handleCommunityClick('r/StableDiffusion')} style={styles.communityItem}>
          <span style={{ color: 'white' , fontSize: '20px' }}>O/PositiveAffirmation</span>
          </div>
          <div onClick={() => handleCommunityClick('r/announcements')} style={styles.communityItem}>
          <span style={{ color: 'white' , fontSize: '20px' }}>O/InspiringStories</span> 
          </div>
          <div onClick={() => handleCommunityClick('r/announcements')} style={styles.communityItem}>
          <span style={{ color: 'white' , fontSize: '20px' }}>O/SelfImprovementAndGrowth</span> 
          </div>
          <div onClick={() => handleCommunityClick('r/announcements')} style={styles.communityItem}>
          <span style={{ color: 'white' , fontSize: '20px' }}>O/Mindfullness</span> 
          </div>
          <div onClick={() => handleCommunityClick('r/announcements')} style={styles.communityItem}>
          <span style={{ color: 'white' , fontSize: '20px' }}>O/Meditation</span> 
          </div>
          <div onClick={() => handleCommunityClick('r/announcements')} style={styles.communityItem}>
          <span style={{ color: 'white' , fontSize: '20px' }}>O/Gratitude</span> 
          </div>
          {/* <div onClick={() => handleCommunityClick('r/announcements')} style={styles.communityItem}>
          <span style={{ color: 'white' , fontSize: '20px' }}>O/PositiveJournaling</span> 
          </div> */}
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
    padding: '10px',
    // backgroundColor: '#f1f1f1',
    // border: '1px solid #ccc',
    borderRadius: '4px',
  },
  dropdownContent: {
    position: 'relative',
    top: '100%',
    left: 0,
    // backgroundColor: '#f9f9f9',
    minWidth: '160px',
    padding: '5px',
    // border: '1px solid #ccc',
    borderRadius: '4px',
    zIndex: 1,
  },
  communityItem: {
    padding: '5px',
    cursor: 'pointer',
    // borderBottom: '1px solid #ccc',
  },
};

export default YourCommunity;
