import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
    <Router>
     
        <div>
          <h2>Welcome to My Neighbourhood </h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/signup'} className="nav-link">Signup</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes>
              <Route exact path='/' component={Login} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={Signup} />
              </Routes>
        </div>
        
      </Router>
    );
  }
}

export default App;
