import React from 'react'

const North = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px', // Adjust height according to your navigation bar size
        backgroundColor: 'transparent',
        border: '1px solid white', // Border to make it visible
        zIndex: 9999, // Ensure it's above other content
      }}
    >
        
    </div>
  )
}

export default North