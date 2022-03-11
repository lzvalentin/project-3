import Home from "./Pages/home/home";
import Login from '../src/Pages/Login/login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import API from "./utils/API"
import Nav from './components/Nav/Nav';
// import Login from "./Pages/Login/login"


// my test
const BASEURL="http://localhost:3000"


function App() {

  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(0)
  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({
    email:"",
    id:0,
    Comments:[],
  })
  const [formState, setFormState] = useState({
    email:'',
    password:''
  })
  const [feed, setfeed] = useState({
    title:"",
    body:'',
    user_id:userId
  })


  useEffect(()=>{
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
    // console.log(data);
    if(data.id){
      console.log(data)
      setToken(savedToken);
      setUserId(data.id);
      setUserData({
        id:data.id,
        email:data.email,
        Comments:data.Comments
      })
    }
  })
  },[])


  const fetchComments = ()=>{
    fetch(`${BASEURL}/comments/`).then(res=>res.json()).then(data=>{
      setComments(data);
    })
  }


  const login = e=>{
    e.preventDefault();
    fetch(`${BASEURL}/users/login`,{
        method:"POST",
        body:JSON.stringify(formState),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      setToken(data.token);
      localStorage.setItem("token",data.token);
      setUserId(data.user.id);
      setUserData({
        id:data.user.id,
        email:data.user.email,
        Comments:data.user.Comments
      })
    })
  }


  const logout = e=>{
    localStorage.removeItem("token");
    setToken("");
    setUserId(0);
    setUserData({
      email:"",
      id:0,
      Comments:[],
    })
  }


  
  // const createComment = e=>{
  //   e.preventDefault();
  //   fetch(`${BASEURL}/comments/`,{
  //     method:"POST",
  //     body:JSON.stringify(blogFormState),
  //     headers:{
  //         "Content-Type":"application/json",
  //         "authorization":`Bearer ${token}`
  //     }
  // }).then(res=>res.json()).then(data=>{
  //   fetchComments()
  // })
  // }







  return (
    <>

{userId?(
  <div>

    </div> 
):(
  <div>

  </div> 
)}


    <Login />
      <Home />
      From the Neighbors folks  
    </>
  )
}
export default App;
