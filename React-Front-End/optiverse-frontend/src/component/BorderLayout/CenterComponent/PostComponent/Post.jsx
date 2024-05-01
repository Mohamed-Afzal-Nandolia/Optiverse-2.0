import React, { useState, useEffect } from 'react';
import { IoChatbox } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { getPost, addPost } from '/src/services/AuthService.js';
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { TiMessage } from "react-icons/ti";
import { MdShare } from "react-icons/md";


const Post = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getPost()
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      {postData.map(post => (
        <div key={post.id} style={styles.container}>
          <div style={styles.date}>Date: {post.p_date}</div>
          <div style={styles.date}>Tags: {post.p_tag}</div>
          <div style={styles.text}>{post.p_post}</div>
          <div style={styles.iconsContainer}>
            <TiMessage style={styles.icon} />
            <AiOutlineRetweet style={styles.icon} />
            <IoHeartOutline style={styles.icon} />
            <MdShare style={styles.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    padding: '2em 3em 0em 3em',
    color: 'white',
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)', 
    marginBottom: '2em', 
  },
  date: {
    alignSelf: 'flex-start', 
    marginBottom: '0.5em',
  },
  text: {
    fontSize: '16px', 
    marginBottom: '1em', 
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    width: '100%', 
    padding: '1em',
  },
  icon: {
    fontSize: '22px', 
  },
};

export default Post;
