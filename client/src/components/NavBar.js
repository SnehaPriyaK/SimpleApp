import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
// import {Link } from "react-router-dom";
// import logo from "logo"

let setValue=(props)=>{
    console.log('jfvheukrce')
    localStorage.setItem('isLoggedIn', false);   
                                console.log("success",localStorage.getItem('isLoggedIn'));
                                props.history.push('/sign-in')
}

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.loggedIn = this.props.loggedIn; 
        this.state = {
          isOpen: false
        }; 
    }

    
    render(){
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log("first",isLoggedIn);
        return(
            <div> 
                        <Navbar bg="light" variant="light">
                        <Container>
                        <Navbar.Brand href="#home"><i className="fas fa-feather-alt"> My Web Page</i></Navbar.Brand>
                        <Nav className="me-auto">
                            {(isLoggedIn=='true') ?
                            
                                <Nav.Link className='nav-link' href="/sign-in" onClick={setValue} >
                                    <i className='fas fa-sign-out-alt'>Logout</i> 
                                </Nav.Link>
                           
                            : null }

                            {(isLoggedIn!=='true') ?
                                <Nav>
                                    <Nav.Link className='nav-link' href="/sign-up">
                                    <i className='fas fa-user-plus'> Sign Up</i>
                                </Nav.Link>
                                <Nav.Link className='nav-link' href="/sign-in">
                                <i className='fas fa-sign-in-alt'> Login</i>
                                </Nav.Link>
                                </Nav>
                                : null
                           
                            }
                        </Nav>
                        </Container>
                    </Navbar>
                    
                </div>
        );
    }
}

export default withRouter(NavBar)