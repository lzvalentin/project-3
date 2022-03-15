import "./share.css"
import { useState, useEffect } from "react";
import React from 'react'
import Comment from "../Comment";
import Post from "../Post";

// const BASEURL="https://neighbors-back.herokuapp.com"

const BASEURL="http://localhost:3000"

export default function Share() {
  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(0)
  const [token, setToken] = useState("")
  const [posts, setPosts] = useState([])


  const [userData, setUserData] = useState({
    email:"",
    id:0,
    Comments:[],
    Post:[]
  })
  useEffect(()=>{
    fetchPosts();
    fetchComments();
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
    console.log("line 54");
    console.log(data);
    console.log(typeof(data.Comments))
    console.log((data.Comments))
    console.log(typeof(data.Posts))
    console.log((data.Posts))
    if(data.id){
      setToken(savedToken);
      setUserId(data.id);
      setUserData({
        id:data.id,
        email:data.email,
        Comments:data.Comments,
        Posts:data.Posts
      })
      console.log("line 54");
      // console.log(data)
      console.log(typeof(userData.Comments['']))

    }
  })
  },[])

  const fetchComments = ()=>{
    fetch(`${BASEURL}/comments/`).then(res=>res.json()).then(data=>{
      setComments(data);
    })
  }
  const fetchPosts = ()=>{
    fetch(`${BASEURL}/posts/`).then(res=>res.json()).then(data=>{
      setPosts(data);
    })
  }
  return(     
      <div>
        <br></br>         
        {posts.map(post =><Post key={post.id} title={post.title} body={post.content} UserId={post.UserId}/>)}

        {/*   UN-COMMENT  LINE 163  to get protected route comments for each user  */}
        {/* {userData.Comments.map(comment =><Comment key={comment.id} title={comment.title} body={comment.body} />)} */}
        {/*   UN-COMMENT  LINE 167  to get ALL comments BUT no error  */}
        {comments.map(comment =><Comment key={comment.id} title={comment.title} body={comment.body} UserId={comment.UserId}/>)}
      </div>
    )
}