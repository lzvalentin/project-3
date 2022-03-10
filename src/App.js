import Home from "./Pages/home/home";
// import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../src/Pages/Login/login.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/Pages/Login/login.css'
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import API from "./utils/API"
import Nav from './components/Nav/Nav';

function App() {
  // const [userEmail, setUserEmail] = useState("");
  // const [userId, setUserId] = useState(0);
  // const [token, setToken] = useState("");

  // const [loginInfo, setLoginInfo] = useState({
  //   email:"",
  //   password:""
  // })

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     API.getTokenData(token)
  //       .then(data => {
  //         console.log(data);
  //         setUserId(data.id);
  //         setUserEmail(data.email);
  //         setToken(token);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  // const logMeIn = (e) => {
  //   e.preventDefault()
  //   API.login(loginInfo.email,loginInfo.password)
  //     .then(data => {
  //       console.log(data);
  //       setUserId(data.user.id);
  //       setUserEmail(data.user.email);
  //       setToken(data.token);
  //       localStorage.setItem("token", data.token);
  //     }).catch(err=>{
  //       console.log(err);
  //     });
  // };

  // const logMeOut = ()=>{
  //   localStorage.removeItem("token");
  //   setUserId(0);
  //   setUserEmail("");
  //   setToken("");
  // }

  // const handleInputChange = e=>{
  //   console.log(e.target.name,e.target.value)
  //   setLoginInfo({
  //     ...loginInfo,
  //     [e.target.name]:e.target.value
  //   })
  // }
  // <Nav logMeOut={logMeOut} logMeIn={logMeIn} userEmail={userEmail} loginInfo={loginInfo} handleInputChange={handleInputChange}/>

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/user" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
