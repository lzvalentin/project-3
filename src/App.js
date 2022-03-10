import Home from "./Pages/home/home";
// import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../src/Pages/Login/login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/Pages/Login/login.css'

function App() {
  return (

    <>
    <Login />
      <Home />;
      ;
    </>
  )
}

export default App;
