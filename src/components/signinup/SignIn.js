import { useState } from 'react';
import { useHistory } from 'react-router';

const SignIn = () => {
    const [person, setPerson] = useState({
        email:"",
        password:""
    });
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
        if(person.email === "q@w.e" && person.password === 'q'){
            history.push('/');
        }
    }
    return (
        <div className="sign-in container">
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
            </div>

            </form>
        </div>
    )
}

export default SignIn;
