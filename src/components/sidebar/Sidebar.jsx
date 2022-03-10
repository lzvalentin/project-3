import "./sidebar.css";
import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>User</div>
      <div>Profile Picture</div>
      <ul>
        <li>
          <a href="">Settings</a>
        </li>
        <li>
          <a href="">Messages</a>
        </li>
        <li>
          <a href="">Pay Bills</a>
        </li>
      </ul>

      <div>
        <p>My Posts</p>
        <ul>
          <li><a href="">BBQ</a></li>
          <li><a href="">Lost Dog</a></li>
          <li><a href="">Pool Party</a></li>
          <li><a href="">Food Drive</a></li>
        </ul>
      </div>
    </div>
  )
}
