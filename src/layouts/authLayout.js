import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = ({ children }) => {
    return (
        <div style={{ background: 'lightblue', height: '100vh' }}>
            {children}
        </div>
    );
}

export default AuthLayout;