import React from 'react';
import { Link } from 'react-router-dom';
import LoginLink from './Login-link';
import SignoutLink from './Signout-link';
import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth, profile } = props;
   const links = auth.uid ? <LoginLink profile={profile} /> : <SignoutLink/>;
    return(
     <nav className="nav-wrapper">
      <div className="container">
      <Link to='/' className="brand-logo">Recipe</Link>
        { links}
      </div>
     </nav> 
    )
}

const mapStateToProps = (state) => {
    
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);