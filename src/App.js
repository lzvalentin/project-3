import Home from "./Pages/home/home";
import "./App.css"
import Login from '../src/Pages/Login/login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import API from "./utils/API"
import Nav from './components/Nav/Nav';
// import Login from "./Pages/Login/login"
import Comment from "./components/Comment";
// import 'dotenv/config'

// const BASEURL="https://neighbors-back.herokuapp.com/"



const BASEURL =  process.env.REACT_APP_BASE_URL || "http://localhost:3000";
function App() {

  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState(0)
  const [token, setToken] = useState("")

  const [userData, setUserData] = useState({
    email:"",
    id:0,
    Comments:[],
    Posts:[]
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
          "authorization":`Bearer ${savedToken}`,
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
    console.log(BASEURL)
    fetch(`${BASEURL}/users/login`,{
        method:"POST",
        body: JSON.stringify(formState),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json()).then(data=>{
      console.log(data.user.id)
      console.log(data.user.Comments)


      setToken(data.token);
      localStorage.setItem("token",data.token);
      setUserId(data.user.id);
      setUserData({
        id:data.user.id,
        email:data.user.email,
        Comments:[data.user.Comments]
      })
      console.log(typeof(userData.Comments))
      console.log(userData.Comments)
      console.log(userData.email)
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
      Posts:[]
    })
    console.log(userData)
  }


  
  // const createComment = e=>{
  //   e.preventDefault();
  //   fetch(`${BASEURL}/comments/`,{
  //     method:"POST",
  //     body:JSON.stringify(commentFormState),
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
  
      <div>
          <h1>Welcome Neighbor - Please login to see your feed </h1><hr></hr>

      </div>
  
    
    {userId?(<h1>Welcome to your feed, {userData.email} !</h1> ):(<form onSubmit={login}>
      <br></br>
      <input name="email" value={formState.email} onChange={e=>setFormState({...formState,email:e.target.value})}/>
      <input name="password" value={formState.password} onChange={e=>setFormState({...formState,password:e.target.value})}/>
      <button>Login</button><hr></hr>
    </form>
    
    )}
    <button className="logout" onClick={logout}>Logout</button><hr></hr>
  
        <Home/>
        </>
      )}

   
{/* 
    <Login />
      <Home />
      From the Neighbors folks  
 */}



 export {BASEURL};
export default App;
