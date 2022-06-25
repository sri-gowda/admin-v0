import React from 'react';
import LogIn from '../../components/Login';

const LoginPage = () => {
    function submit(values) {
        console.log("values", values)

    }
    return (
        <div className='center'>
            <LogIn submit={submit} />
        </div>
    );
}

export default LoginPage;