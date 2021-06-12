import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <nav className="nav-wrapper blue-grey lighten-5 ">
        <NavLink to='/' className="left"><img src={Logo} alt="logo" className="navbar-logo" width="250" height="70"/></NavLink>
                <SignedInLinks />
                <SignedOutLinks />
        </nav>
    );
}

export default Navbar;
