import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div style={{ background: 'lightblue', height: '100vh' }}>
            <Outlet />
        </div>
    );
}

export default AuthLayout;