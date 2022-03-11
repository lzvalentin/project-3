import Home from "./Pages/home/home";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import API from "./utils/API"
import Nav from './components/Nav/Nav';
import Login from "./Pages/Login/login"

function App() {
  // const reqBody = {
  //   "user":"joe@joe.joe",
  //   "pwd":"password"
  // }
  // fetch("api/auth/login", {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   method:"post",
  //   body: JSON.stringify(reqBody),
  // })
  // .then((response)=>{
  //   return response.json()
  // })
  // .then((data)=>console.log(data));

  return (
    <main>
      <Nav />
      <Login />
    </main>
  )
}
export default App;
