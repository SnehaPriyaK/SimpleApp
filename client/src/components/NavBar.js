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
        //console.log(this.props.loggedIn,this.loggedIn,this.props.loggedIn=='true')
        return(
            <div> 
                        <Navbar bg="light" variant="light">
                        <Container>
                        <Navbar.Brand href="#home"><i class="fas fa-feather-alt"> My Web Page</i></Navbar.Brand>
                        <Nav className="me-auto">
                        {/* <Nav.Link href="./sign-in">Login</Nav.Link>
                        <Nav.Link href="./sign-up">SignUp</Nav.Link> */}
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
                    
                {/* <Nav.Link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'/>
                <Navbar color="faded" light expand="md">
                    <Link className='navbar-brand' exact to='/'>
                        <img src={logo} alt='Brand' width='35px' height='35px'/>
                    </Link>
                    <Navbar.Toggle onClick={this.toggle} />
                    <Navbar.Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link className='nav-link' exact to='/categories'>
                                    Categories
                                </Link>
                            </NavItem>
                        </Nav>
                        <Nav className='mx-auto' navbar>
                            <Form inline>
                                <FormGroup>
                                    <Input size='sm' type="text" name="search" placeholder="Search" />
                                </FormGroup>
                                <Button size='sm'><i className='fa fa-search'></i></Button>
                            </Form>
                        </Nav>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <Link className='nav-link' exact to='/cart'>
                                    <i className='fa fa-shopping-cart'></i>
                                </Link>
                            </NavItem>

                            {(this.loggedIn) ?
                            <NavItem>
                                <Link className='nav-link' exact to='/profile'>
                                    <i className='fa fa-user'></i> 
                                </Link>
                            </NavItem>
                            : null }

                            {(this.loggedIn) ?

                            <NavItem>
                                <Link className='nav-link' exact to='/logout'>
                                    <i className='fa fa-sign-out'></i>
                                </Link>
                            </NavItem>
                            : 
                            <NavItem>
                                <Link className='nav-link' exact to='/login'>
                                    <i className='fa fa-sign-in'></i>
                                </Link>
                            </NavItem>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
            </div>
        );
    }
}

export default withRouter(NavBar)