import React from 'react'
import { RiGlobalLine } from "react-icons/ri";


const Trending = () => {
    const handleClick = () => {
        // Handle click event here
        console.log('Popular clicked');
      };

  return (
    <div 
      style={{
        // position: 'fixed',
        top: 100, // Adjust according to the height of your north component
        left: 0,
        alignSelf: 'flex-start', // Adjust width as needed
        height: 50, // Adjust height as needed
        backgroundColor: 'transparent',
        // border: '1px solid white', // Border to make it visible
        zIndex: 9998, // Ensure it's above other content, but below the NorthComponent
        display: 'flex',
        justifyContent: 'normal',
        alignItems: 'center',
        cursor: 'pointer', // Change cursor to pointer on hover
        fontSize: '24px', // Adjust icon size
        paddingLeft: '1em',
        userSelect: 'none',
      }}
      onClick={handleClick}
    >
        <RiGlobalLine size={40} style={{ fill: 'white' , padding: '5px' , top: 0 , left: 0}}/>

        <div style={{color: 'white' , fontSize: '20px' , paddingLeft: '0.3em' }} >
            Trending
        </div>
        
    </div>
  )
}

export default Trending