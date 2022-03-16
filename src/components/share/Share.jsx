import {BASEURL} from "../../App"
import "./share.css"
import { useState, useEffect } from "react";
import React from 'react'
import Comment from "../Comment";
import Serverposts from "../../serverposts";
// const BASEURL="https://neighbors-back.herokuapp.com"


export default function Share() {
  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(0)
  const [token, setToken] = useState("")
  const [Posts, setPosts] = useState([])


  const [userData, setUserData] = useState({
    email:"",
    id:0,
    Comments:[],
    Posts:[]
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
    if(data.id){
      setToken(savedToken);
      setUserId(data.id);
      setUserData({
        id:data.id,
        email:data.email,
        Comments:data.Comments,
        Posts:data.Posts
      })
      console.log(data.Posts)
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
        {Posts.map(post =><Serverposts key={post.id} title={post.title} body={post.content} userData={userId} date={post.createdAt}/>)}

        {/*   UN-COMMENT  LINE 163  to get protected route comments for each user  */}
        {/* {userData.Comments.map(comment =><Comment key={comment.id} title={comment.title} body={comment.body} />)} */}
        {/*   UN-COMMENT  LINE 167  to get ALL comments BUT no error  */}
        {/* {comments.map(comment =><Comment key={comment.id} title={comment.title} body={comment.body} UserId={comment.UserId}/>)} */}
      </div>
    )
}