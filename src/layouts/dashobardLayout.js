import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div style={{ background: 'yellow', height: '100vh' }}>
            <div>Sidebar</div>
            <Outlet />
        </div>
    );
}

export default DashboardLayout;