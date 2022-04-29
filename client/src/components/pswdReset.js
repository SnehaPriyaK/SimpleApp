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
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
          </div>
          <input type="email" name="email" value={this.state.email} onChange={e=>this.handleChange(e)} className="form-control" placeholder="Enter email"/>
        </div>        
        <div className="errorMsg">{this.state.emailErr}</div>
        <button type="submit" className="btn btn-primary btn-block" onClick={e=>this.submitForm(e)}>Send Email</button>
      </form>
    )
  }
}



// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

// export default class PswdReset extends Component {
//   constructor(){
//     this.state={
//       email:'',
//       validate:{}
//     }
//   };

//   forgotPassword = (e) => {
//     e.preventDefault();

//   //  const validate = validateforgotPassword();

//     //if (validate) {
//         alert('Reset password link is sent to '+this.state.email);
//         this.setState({
//           email:'',
//           validate:{}
//         })
//    // }
//   }

 
//   render() {
//     return (
//       <div>
//         <p>
//           Hello
//         </p>
//       </div>
//       // <div className="row g-0 auth-wrapper">
//       //       <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
//       //           <div className="auth-background-holder"></div>
//       //           <div className="auth-background-mask"></div>
//       //       </div>

//       //       <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
//       //           <div className="d-flex flex-column align-content-end">
//       //               <div className="auth-body mx-auto">
//       //                   <p>Forgot Password</p>
//       //                   <div className="auth-form-container text-start">
//       //                       <form className="auth-form" method="POST" onSubmit={this.forgotPassword} autoComplete={'off'}>
//       //                           <div className="email mb-3">
//       //                               <input type="email"
//       //                                   className={`form-control`}
//       //                                   id="email"
//       //                                   name="email"
//       //                                   value={this.state.email}
//       //                                   placeholder="Email"
//       //                                   onChange={(e) => this.setState({email:e.target.value})}
//       //                               />

//       //                               {/* <div className={`invalid-feedback text-start `} >
//       //                                   {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
//       //                               </div> */}
//       //                           </div>
                                
//       //                           <div className="text-center">
//       //                               <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Forgot Password</button>
//       //                           </div>
//       //                       </form>

//       //                       <hr />
//       //                       <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
//       //                   </div>
//       //               </div>
//       //           </div>
//       //       </div>

//       //   </div>
//     )
//   }
// }





