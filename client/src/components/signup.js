import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import '../App.css'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {},
          pswdVisibility:false
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
    }

    submitForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            var resgisteredUser = JSON.parse(localStorage.getItem("resgisteredUser")) || []
            var resgistered={
              email:this.state.fields.email,
              password:this.state.fields.pswd,
            }
            resgisteredUser.push(resgistered)
            localStorage.setItem("resgisteredUser",JSON.stringify(resgisteredUser));
            console.log("@@@@@@@@@@@",resgisteredUser,axios)
            
            axios
              .post("/api/sign-in",{resgisteredUser:this.state.fields})
              .then(response =>{
                console.log("response from node",response);
              })
            fields["lname"] = "";
            fields["email"] = "";
            fields["pswd"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
            this.props.history.push('sign-in');
        }
  
    }

    validateForm(){
        let fields =this.state.fields;
        let errors ={};
        let formIsValid = true;

        if(!fields["fname"]){
            formIsValid = false;
            errors["fname"] = "*Please enter your first name.";
        }
  
        if (typeof fields["fname"] !== "undefined") {
          if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["fname"] = "*Please enter alphabet characters only.";
          }
        }

        if(!fields["lname"]){
            formIsValid = false;
            errors["lname"] = "*Please enter your last name.";
        }
  
        if (typeof fields["lname"] !== "undefined") {
          if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["lname"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
  
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }
  
        if (!fields["pswd"]) {
          formIsValid = false;
          errors["pswd"] = "*Please enter your password.";
        }
  
        if (typeof fields["pswd"] !== "undefined") {
          if (!fields["pswd"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["pswd"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
    }


    render() {
      // axios
      // .post("/api/sign-in",{resgisteredUser:this.state.fields})
      // .then(response =>{
      //   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!###################",response.data)
      //   return response.data;
      // });
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      <span className="input-group-text"><i className="far fa-user"></i></span>
                      </div>
                      <input type="text" name="fname" value={this.state.fields.fname} onChange={this.handleChange} className="form-control" placeholder="First name" />                    
                    </div>
                    <div className="errorMsg">{this.state.errors.fname}</div>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      <span className="input-group-text"><i className="far fa-user"></i></span>
                      </div>
                      <input type="text" name="lname" value={this.state.fields.lname} onChange={this.handleChange} className="form-control" placeholder="Last name" />                    
                    </div>
                    <div className="errorMsg">{this.state.errors.lname}</div>
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      <span className="input-group-text"><i className="far fa-address-book"></i></span>
                      </div>
                      <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} className="form-control" placeholder="Enter mobile Nubmer" />                    
                    </div>
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                      </div>
                      <input type="email" name="email" value={this.state.fields.email} onChange={this.handleChange} className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="errorMsg">{this.state.errors.email}</div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                      </div>
                      <input type={this.state.pswdVisibility===true?'text':'password'} name="pswd" style={{borderRight:'none'}} value={this.state.fields.pswd} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                      <div className="input-group-prepend">
                        <span className="input-group-text" style={{backgroundColor:"white", borderLeft:'none'}}><i className={this.state.pswdVisibility===true?'far fa-eye':'far fa-eye-slash'} onClick={()=>this.setState({pswdVisibility:!this.state.pswdVisibility})}></i></span>
                      </div>                                    
                    </div>
                    <div className="errorMsg">{this.state.errors.pswd}</div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitForm}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/sign-in">sign in?</Link>
                </p>
            </form>
        );
    }
}

export default withRouter(SignUp);