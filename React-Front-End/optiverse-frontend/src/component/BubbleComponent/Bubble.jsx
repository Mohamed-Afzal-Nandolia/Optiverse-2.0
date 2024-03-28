import React, { useState } from 'react';
import './Bubble.css'; // Import your CSS file

function Bubble() {
    const [tags, setTags] = useState([]);

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setTags([...tags, e.target.value]);
            e.target.value = '';
        }
    }

    return (
        <div className="wrapper">
            <textarea name="story" placeholder="Share your story..." rows="3" cols="50" required></textarea>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter to add tags" />
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <button type="submit" className='post-btn'>Post</button>
        </div>
    );
}

export default Bubble;
