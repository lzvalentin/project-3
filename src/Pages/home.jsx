import React from 'react';
import Nav from '../components/Nav/Nav';
import Rightbar from '../components/rightbar/Rightbar';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed';
import "./home.css";


export default function Home() {
  return (
    <>
      <Nav/>
      <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>
    </>
    );
}
