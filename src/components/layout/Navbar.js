import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <NavLink to='/' className="brand-logo left">MarioPlan</NavLink>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;
