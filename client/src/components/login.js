import axios from "axios";
import React, { Component } from "react";
import '../App.css'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {},
          pswdVisibility:'false'
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
        const resgisteredUser = JSON.parse(localStorage.getItem('resgisteredUser'));       
        console.log("submit called",resgisteredUser)
        if (this.validateForm()) {
          console.log("erererererre")
          axios
          .get("/api")
          .then((res)=> {
            console.log("@#@@@@@@@@@@@@@#######",res.data);
            let resgisteredUser=res.data;
            let isRegisteredUser = false;
            let fields = {};
            fields["email"] = "";
            fields["pswd"] = "";
            resgisteredUser.forEach(user => {
                  console.log("1111",user.emailID,user.password);
                  if(user.emailID === this.state.fields.email && user.password === this.state.fields.pswd){
                    isRegisteredUser=true;
                  }                  
                });
                if(isRegisteredUser===true){
                  this.setState({fields:fields});
                  localStorage.setItem('isLoggedIn', true);
                 alert("Login successful");
                  this.props.history.push('/home');
              }
              else{
                  alert("Invalid Username / password");
              }        
          })
          //   let fields = {};
          //   fields["email"] = "";
          //   fields["pswd"] = "";
          //   let isRegisteredUser = false;
          //   resgisteredUser.forEach(user => {
          //     console.log("1111",user.email,user.password);
          //     if(user.email === this.state.fields.email && user.password === this.state.fields.pswd){
          //       isRegisteredUser=true;
          //     }                  
          //   });
          //   if(isRegisteredUser===true){
          //     this.setState({fields:fields});
          //     localStorage.setItem('isLoggedIn', true);
          //    alert("Login successful");
          //     this.props.history.push('/home');
          // }
          // else{
          //     alert("Invalid Username / password");
          // }                 
        }
  
    }

    validateForm(){
        console.log("validate called")
        let fields =this.state.fields;
        let errors ={};
        let formIsValid = true;

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
  
        if (!fields["pswd"]) {
          formIsValid = false;
          errors["pswd"] = "*Please enter your password.";
        }

        this.setState({
          errors: errors
        });
        return formIsValid;
    }

    render() {
        return (
            <form >
                <h3>Sign In</h3>

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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitForm}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/pswdreset">password?</a>
                </p>
            </form>
        );
    }
}
