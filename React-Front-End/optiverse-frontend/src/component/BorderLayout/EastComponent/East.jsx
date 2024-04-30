import React from 'react'


const East = () => {
  return (
    <div
      style={{
        //position: 'fixed',
        //top: 100, // Adjust according to the height of your north component
        //right: 200,
        width: 450, // Adjust width as needed
        height: '100%', // Take the full height of the viewport
        backgroundColor: 'transparent',
        // border: '1px solid yellow', // Border to make it visible
        // zIndex: 9998, // Ensure it's above other content, but below the NorthComponent
        padding: '50px 25px 50px 25px',
        borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
        overflow: 'scroll',
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For Internet Explorer and Edge */
      }}
    >
    </div>
  )
}

export default East