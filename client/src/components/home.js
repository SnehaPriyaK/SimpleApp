import React, { Component } from 'react'
//import NavBar from './NavBar'

export default class home extends Component {
  componentDidMount(){
    //window.location.reload();
  }
  render() {
   // const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
      
      <div>
        {/* <NavBar loggedIn={isLoggedIn}/> */}
        <h1>Welcome home</h1></div>
    )
  }
}
