import React from 'react';
import SignUp from '../../components/Signup';

const SignUpPage = () => {


    function submit(values) {
        console.log("values", values)

    }

    return (
        <div className='center'>
            <SignUp submit={submit} />
        </div>
    );
}

export default SignUpPage;