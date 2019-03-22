import React from 'react';
import { NavLink } from 'react-router-dom';




const SignoutLink = () => {
    return(
    <ul className="right">
    <li><NavLink to='/signup'>Sign Up</NavLink></li>
    <li><NavLink to='/login'>Sign In</NavLink></li>
    
    </ul>
    )
}


export default SignoutLink;