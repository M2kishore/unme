import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Logo from '../../assets/logo.png'
import {FaHamburger} from 'react-icons/fa'
import M from 'materialize-css';
const Navbar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });
    return (
        <nav className="nav-wrapper blue-grey lighten-5 ">
        <div className="nav-wrapper">
        {isSignedIn
            ?<SignedInLinks/>
            :<SignedOutLinks/>}
            <NavLink to='/' className="left"><img src={Logo} alt="logo" className="navbar-logo" width="170" height="50" /></NavLink>
            <NavLink to='#' data-target="mobile-nav" className="right sidenav-trigger"><i class="grey-text text-darken-4 large material-icons"><FaHamburger/></i></NavLink>
        </div>
        </nav>
    );
}

export default Navbar;
