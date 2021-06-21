import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create' className="grey-text text-darken-4" activeClassName="teal lighten-2">New Memory</NavLink></li>
        <li><NavLink to='/whereabout' className="grey-text text-darken-4" activeClassName="teal lighten-2">Whereabouts</NavLink></li>
        <li><NavLink to='/' exact className="grey-text text-darken-4" activeClassName="teal lighten-2">Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks
