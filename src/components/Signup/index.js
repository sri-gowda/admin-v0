import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const SignUp = ({ submit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const payload = {
            email, password
        }
        submit(payload)
    }

    return (
        <form className='card form-container' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className='form-field'>
                <label>Email</label>
                <input type="email" className='input-element' value={email} onChange={onChangeEmail} />
            </div>
            <div className='form-field'>
                <label>Passsword</label>
                <input type="password" className='input-element' value={password} onChange={onChangePassword} />
            </div>
            {/* <button className='primary-btn'>Submit</button> */}
            <Button text="Sign Up" type="SECONDARY">Sign Up</Button>
            <br />
            <Link to="/login">
                Have Account ? Login
            </Link>
        </form>
    );
}

export default SignUp;