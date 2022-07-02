import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    return (
        <div style={{ background: 'yellow', height: '100vh' }}>
            <div style={{ display: 'flex', width: '100%' }}>
                <Sidebar />
                <div style={{ width: '100%' }}>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;