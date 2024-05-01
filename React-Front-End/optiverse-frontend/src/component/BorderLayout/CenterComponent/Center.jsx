import React from 'react'
import CreatePost from './CreatePostComponent/CreatePost'
import Post from './PostComponent/Post'

const Center = () => {
  return (
    <div
      style={{
        width: '37%',
        height: '100%',
        backgroundColor: 'transparent',
        overflow: 'scroll',
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For Internet Explorer and Edge */
      }}
    >
      <CreatePost />
      <Post />
    </div>
  )
}

export default Center