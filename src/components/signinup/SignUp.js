import { useHistory, Link} from 'react-router';
import { useState, useEffect} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle
} from '../../firebase/Firebase'

const SignUp = () => {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password:""
    });
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/whereabout");
      }, [user, loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
        registerWithEmailAndPassword(person);
    }
    return (
        <div className="sign-in container">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
            <div className="input-field">
                <input type="text"
                required
                id="first-name"
                onChange={(e) => {setPerson({...person,firstName: e.target.value})}}/>
                <label htmlFor="first-name">First Name</label>
            </div>
            <div className="input-field">
                <input type="text"
                required
                id="last-name"
                onChange={(e) => {setPerson({...person,lastName: e.target.value})}}/>
                <label htmlFor="last-name">Last Name</label>
            </div>
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
            <div className="input-field">
                <button className="btn" onClick={signInWithGoogle}>SignIn With Google</button>
            </div>

            </form>
        </div>
    )
}

export default SignUp;
