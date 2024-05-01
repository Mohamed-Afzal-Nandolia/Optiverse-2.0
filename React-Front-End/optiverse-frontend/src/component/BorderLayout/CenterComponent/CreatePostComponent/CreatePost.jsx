import React, { useState } from 'react';
import { addPost } from '/src/services/AuthService.js';

const CreatePost = ({ onPost }) => {
  const [postText, setPostText] = useState('');

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostClick = async () => {
    try {
      // Capture the current date in the format "yyyy-MM-dd"
      const currentDate = new Date().toISOString().split('T')[0];

      // Call the addPost function to post the content along with the current date
      await addPost({ p_post: postText, p_date: currentDate });

      // Clear the post text after posting
      setPostText('');

      // Optionally, you can call onPost if needed
      if (onPost) {
        onPost();
      }
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  return (
    <div style={styles.container}>
      <textarea
        style={styles.textarea}
        value={postText}
        onChange={handlePostTextChange}
        placeholder="How are you feeling today?"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <button style={styles.button} onClick={handlePostClick}>
          Post
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2em 2em 1em 2em',
    color: 'white',
    borderRadius: '10px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
  },
  textarea: {
    width: '100%',
    minHeight: '100px',
    marginBottom: '15px',
    borderRadius: '10px',
    padding: '1em',
    border: 'none',
    fontSize: '19px',
    outline: 'none',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    width: '6em',
  },
};

export default CreatePost;
