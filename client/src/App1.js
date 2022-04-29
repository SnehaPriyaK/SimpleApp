// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Login from "./components/login";
// import SignUp from "./components/signup";
// import Home from "./components/home";

// //let isLoggedIn = localStorage.getItem('isLoggedIn');
// // var setItem = () => {
// //   localStorage.setItem('isLoggedIn', false);
// //   console.log("success",localStorage.getItem('isLoggedIn')
// //   )
// // }
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       isLoggedIn:false
//     }
//   }
//   // componentWillMount(){
//   //   this.setState({isLoggedIn : localStorage.getItem('isLoggedIn')})
//   // }

//   componentDidUpdate(prevState){
//     console.log("//////////////",prevState);
//   }

//   render(){
//     return (<Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={"/sign-in"}>Welcome</Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 {!this.state.isLoggedIn? <div><li className="nav-item">
//                   <Link className="nav-link" to={"/sign-in"}>Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//                 </li> </div>:
//                 <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"} onClick={()=>this.setState({isLoggedIn : localStorage.getItem('isLoggedIn')})}>Logout</Link>
//               </li>}
//               </ul>
//             </div>
//           </div>
//     </nav>
  
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Switch>
//               <Route exact path='/' component={Login} />
//               <Route path="/sign-in" component={Login} />
//               <Route path="/sign-up" component={SignUp} />
//               <Route path="/home" component={Home} />
//             </Switch>
//           </div>
//         </div>
//       </div></Router>
//     );
//   }
// }

// export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";

const isLoggedIn = localStorage.getItem('isLoggedIn');
console.log("first",isLoggedIn);
var setItem = () => {
    let l=localStorage.getItem('isLoggedIn');
    console.log(l,isLoggedIn)
    //if(l!==isLoggedIn){
      window.location.reload()
    //} 
    
    localStorage.setItem('isLoggedIn', false);   
    console.log("success",localStorage.getItem('isLoggedIn')
    )
  }

function App() {
  console.log("Called",isLoggedIn)
  return (<Router>
    <div className="App">
      {!isLoggedIn?<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      :
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Welcome.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} onClick={setItem}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;