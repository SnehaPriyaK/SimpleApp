import React, { Component } from 'react'

export default class pswdReset extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      emailErr:''
    }
  }

  submitForm(e) { 
    console.log("dsfweFCWEF")       
    e.preventDefault();
    let isValid=this.validateForm();
    if (isValid) {
      alert('Reset password link is sent to '+this.state.email);
        }
  }
    
  validateForm(){
    console.log("ASDCBADSCKGHasdliCVA")
        let formIsValid = true;
        if (!this.state.email) {
          formIsValid = false;
          this.setState({emailErr : "*Please enter your email-ID."}) ;
        }
        return formIsValid
  }

  handleChange(e) {
    this.setState({
      email:e.target.value
    });

}

  
  render() {
    return (
      <form>
        <h3>Forgot Password</h3>
        <label>Email address</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
          </div>
          <input type="email" name="email" value={this.state.email} onChange={e=>this.handleChange(e)} className="form-control" placeholder="Enter email"/>
        </div>        
        <div className="errorMsg">{this.state.emailErr}</div>
        <button type="submit" className="btn btn-primary btn-block" onClick={e=>this.submitForm(e)}>Send Email</button>
      </form>
    )
  }
}