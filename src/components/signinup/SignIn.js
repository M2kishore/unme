import { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
const SignIn = ({email, password, dispatch}) => {
    const [person, setPerson] = useState({
        email:"",
        password:""
    });
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
        console.log(email+'  '+password);
        if(person.email === "q@w.e" && person.password === 'q'){
            history.push('/');
        }
    }
    return (
        <div className="sign-in container">
        {
            () => {dispatch({ type: "INC" })}
        }
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit}>
            <div className="input-field">
                <input type="email"
                className="validate"
                required
                id="email"
                onChange={(e) => {setPerson({...person,email: e.target.value})}}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
                <input type="password"
                required
                id="password"
                onChange={(e) => {setPerson({...person,password: e.target.value})}}/>
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-field">
                <button type="submit" className="btn">Submit</button>
                <button className="btn" onClick={() => dispatch({ type: "INC" })}>Dispatch</button>
            </div>

            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
  });

export default connect(mapStateToProps)(SignIn);
