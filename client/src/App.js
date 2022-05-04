import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import NavBar from "./components/NavBar";
import PswdReset from "./components/pswdReset";

const isLoggedIn = localStorage.getItem('isLoggedIn');
console.log("first",isLoggedIn);

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log("first",isLoggedIn);
  return (<Router>
    <div className="App">
      <NavBar />
      <div className='auth-wrapper'>
      <div className='auth-inner'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />            
            <Route path="/home" component={Home} />
            <Route path="/pswdreset" component={PswdReset} />
          </Switch> 
          </div>  
          </div>     
    </div></Router>
  );
}

export default App;