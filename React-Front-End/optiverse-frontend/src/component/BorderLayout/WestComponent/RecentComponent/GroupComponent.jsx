import React from 'react'
import Recent from './Recent'

const GroupComponent = () => {
  return (
    <div style={{
        top: 100, // Adjust according to the height of your north component
        left: 0,
        alignSelf: 'flex-start', // Adjust width as needed
        // height: 100, // Adjust height as needed
        backgroundColor: 'transparent',
        // border: '1px solid white', // Border to make it visible
        // zIndex: 9998, // Ensure it's above other content, but below the NorthComponent
        display: 'flex',
        justifyContent: 'normal',
        alignItems: 'center',
        cursor: 'pointer', // Change cursor to pointer on hover
        fontSize: '24px', // Adjust icon size
        padding: '1em' }}
    >

        <Recent/>
        
        
    </div>
  )
}

export default GroupComponent