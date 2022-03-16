import "./sidebar.css";
import {BASEURL} from "../../App"
import "./sidebar.css"
import { useState, useEffect } from "react";
import React from 'react'
// import Comment from "../Comment";
import Categories from "../../categories";
// const BASEURL="https://neighbors-back.herokuapp.com"

let temp = []


export default function Sidebar() {
  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(0)
  const [token, setToken] = useState("")
  const [Posts, setPosts] = useState([])

  const [userData, setUserData] = useState({
    email:"",
    id:0,
    Posts:[]
  })
  useEffect(()=>{
    fetchPosts();
    // fetchComments();
    const savedToken = localStorage.getItem("token");
    fetch(`${BASEURL}/users/profile`,{
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          "authorization":`Bearer ${savedToken}`
      }
  }).then(res=>{
      return res.json()
  }).then(data=>{
    if(data.id){
      setToken(savedToken);
      setUserId(data.id);
      setUserData({
        id:data.id,
        email:data.email,
        Posts:data.Posts
      })
      console.log(data.Posts)
      temp = data.Posts
    }
  })
  },[])

  // const fetchComments = ()=>{
  //   fetch(`${BASEURL}/comments/`).then(res=>res.json()).then(data=>{
  //     setComments(data);
  //   })
  // }
  const fetchPosts = ()=>{
    fetch(`${BASEURL}/posts/`).then(res=>res.json()).then(data=>{
      setPosts(data);
    })
  }






 
  return (
    <div className="sidebar">

{/* {Posts.map(post =><Categories key={post.id} category={post.category}  />)} */}


{temp.map(post =><Categories key={post.id} title={post.title} body={post.content} userData={userId}/>)}



      {/* <div>{props.user}</div>
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
      </div> */}
    </div>
  )
}
