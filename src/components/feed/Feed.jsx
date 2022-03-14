import "./feed.css";
import React from 'react';
import Share from '../share/Share'

export default function Feed() {
  return (
    <div className="feed">
      <div className="postbox"><input type="text" /><button>Post</button></div>
      <Share/>
    </div>
  )
}
