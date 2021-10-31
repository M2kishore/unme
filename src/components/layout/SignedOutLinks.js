import React from 'react'
import { NavLink } from 'react-router-dom';
const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to='/signup' className="grey-text text-darken-4" activeClassName="teal lighten-2">Signup</NavLink></li>
        <li><NavLink to='/signin' className="grey-text text-darken-4" activeClassName="teal lighten-2">Login</NavLink></li>
      </ul>
      <ul className="sidenav" id="mobile-nav">
        <li><NavLink to='/signup' className="grey-text text-darken-4" activeClassName="teal lighten-2">Signup</NavLink></li>
        <li><NavLink to='/signin' className="grey-text text-darken-4" activeClassName="teal lighten-2">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks