// NavigationBar.jsx
import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navbar">
      {/* Navigation bar items */}
      <p>OptiVerse Home</p>
      <p>Topics</p>
      <p>Your Posts</p>
      <p>Messages</p>
      <p>Notifications</p>
      <p>My Liked Posts</p>
      <p>Search</p>
      <p>Log Out</p>
    </div>
  );
}

export default NavigationBar;