import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';




const LoginLink = (props) => {
   
    return(
    <ul className="right">
    <li><NavLink to='/create'>Add New Recipe</NavLink></li>
    <li><a href ="/" onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to='/' className='btn btn-floating black'>
    {props.profile.initials}
    </NavLink></li>

    </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps) (LoginLink);