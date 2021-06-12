import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup' className="grey-text text-darken-4">Signup</NavLink></li>
        <li><NavLink to='/signin' className="grey-text text-darken-4">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks