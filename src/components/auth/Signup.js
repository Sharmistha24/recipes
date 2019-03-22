import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authAction';



 class SignUp extends Component {
     state = {
        fullName:'',
        email:'',
        password:''

     }

   handleChange = (e) =>{
       this.setState({
           [e.target.id]: e.target.value
       })
   } 
   
   handleSubmit = (e) =>{
      e.preventDefault();
     this.props.signUp(this.state)
   }

  render() {
    const { authError, auth } =this.props;
    if (auth.uid) return <Redirect to='/login'></Redirect>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
        <h4 className="grey-text text-darken-3">Sign Up</h4>
        <div className="input-field">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" onChange={this.handleChange}/>

        </div>

        <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={this.handleChange}/>

        </div>

        <div className="input-field">
        <label htmlFor="password">Password(Minimum 6 characters)</label>
        <input type="password" id="password" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
        <button className="btn pink lighten-1">SignUp</button>
        <div className="red-text center">
        { authError ? <p>{authError}</p> : null }
        </div>
        </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
   
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp);