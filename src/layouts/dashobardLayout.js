import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const sidebarRef = useRef();
    const headerContentRef = useRef();
    const contentRef = useRef();

    function handleClick() {
        if (isOpen) {
            sidebarRef.current.style.cssText = "width:100px;"
            headerContentRef.current.style.cssText = "margin-left: 100px;"
            contentRef.current.style.cssText = "margin-left: 100px;"
            setIsOpen(false)
        } else {
            sidebarRef.current.style.cssText = "width:250px;"
            headerContentRef.current.style.cssText = "margin-left: 250px;"
            contentRef.current.style.cssText = "margin-left: 250px;"
            setIsOpen(true)
        }
    }

    return (
        <div className='container'>
            <Sidebar sidebarRef={sidebarRef} isOpen={isOpen} />
            <div className='page'>
                <Header handleClick={handleClick} headerContentRef={headerContentRef} />
                <Outlet context={contentRef} />
            </div>
        </div>
    );
}

export default DashboardLayout;