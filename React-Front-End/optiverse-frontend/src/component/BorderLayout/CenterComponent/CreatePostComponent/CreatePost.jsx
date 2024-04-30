import React, { useState } from 'react';

const CreatePost = ({ onPost }) => {
  const [postText, setPostText] = useState('');

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostClick = () => {
    onPost(postText);
    setPostText('');
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
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)', // Only border bottom
    },
  textarea: {
    width: '100%',
    minHeight: '100px',
    marginBottom: '15px',
    borderRadius: '10px',
    padding: '1em',
    border: 'none',
    fontSize: '19px', // Adjust the textarea font size
    outline: 'none', // Remove the outline
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
