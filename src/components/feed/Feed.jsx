import "./feed.css";
import React from 'react';
import Share from '../share/Share'
import Post from "../post";

export default function Feed() {
  return (
    <>
    <div className="feed">
      <Post/>
      <Share/>
    </div>
    </>
  )
}
