import React from 'react'
import CreatePost from './CreatePostComponent/CreatePost'

const Center = () => {
  return (
    <div
      style={{
        //position: 'fixed',
        //top: 100, // Adjust according to the height of your north component
        //left: 650, // Adjust according to the width of your west component
        //right: 650, // Adjust according to the width of your east component
       // bottom: 0, // Adjust according to the height of your south component
        width: '37%',
        height: '100%',
        backgroundColor: 'transparent',
        // border: '5px solid red', // Border color red
        // zIndex: 9997, // Ensure it's above other content, but below the North, East, West, and South components
        overflow: 'scroll',
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For Internet Explorer and Edge */
      }}
    >
      <CreatePost/>
    </div>
  )
}

export default Center