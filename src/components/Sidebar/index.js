import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const sidebarItems = [
    {
        name: 'Home',
        id: '1',
        path: "/",
        // icon: 'fa fa-home'
        icon: logo
    },
    {
        name: "Products",
        id: '2',
        path: '/products',
        // icon: 'fa fa-car'
        icon: logo
    }
]

const Sidebar = ({ sidebarRef, isOpen }) => {

    const { pathname } = useLocation();

    return (

        <div className="sidebar" id="sidebar" ref={sidebarRef}>
            <img src={logo} height="50px" />
            <ul className='list'>
                {sidebarItems.map((itm, index) => {
                    let selected = pathname === itm.path;
                    console.log("kk", pathname, itm.name, pathname.includes(itm.name));
                    return <li key={index} className='list-item' style={{ background: selected ? 'darkblue' : '', cursor: 'pointer', textAlign: !isOpen ? 'center' : 'left' }}>
                        <Link to={itm.path} style={{ color: selected ? '#fff' : '#000', display: 'block' }}>
                            {/* <i className={itm.icon} style={{ color: '#fff' }}></i> */}
                            <img src={itm.icon} height="20px" />
                            {isOpen && <span style={{ marginLeft: '10px' }}>{itm.name}</span>}
                        </Link>
                    </li>
                })}
            </ul>
        </div>

    );
}

export default Sidebar;