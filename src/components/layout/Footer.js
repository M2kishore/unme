import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <footer className="page-footer blue-grey lighten-5">
          <div className="container blue-grey lighten-5">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="black-text">U & Me</h5>
                <p className="grey-text text-darken-2">Just Memories!</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="black-text">Jump to:</h5>
                <ul>
                  <li><Link className="grey-text text-darken-2" to="/">Home</Link></li>
                  <li><Link className="grey-text text-darken-2" to="/create">New Mempory</Link></li>
                  <li><Link className="grey-text text-darken-2" to="/whereabout">Whereabouts</Link></li>
                  <li><Link className="grey-text text-darken-2" to="/aboutus">About Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container grey-text ">
              © 2021 Copyright HD
            </div>
          </div>
        </footer>
     );
}
 
export default Footer;