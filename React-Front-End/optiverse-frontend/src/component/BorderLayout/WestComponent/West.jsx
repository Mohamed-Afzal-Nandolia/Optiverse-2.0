import React from 'react'

const West = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 100, // Adjust according to the height of your north component
        left: 200,
        width: 450, // Adjust width as needed
        height: '100%', // Take the full height of the viewport
        backgroundColor: 'transparent',
        border: '1px solid yellow', // Border to make it visible
        zIndex: 9998, // Ensure it's above other content, but below the NorthComponent
      }}
    >
        West
    </div>
  )
}

export default West