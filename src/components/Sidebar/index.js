import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sidebarItems = [
    {
        name: 'Home',
        id: '1',
        isSelected: true,
        path: "/home"
    },
    {
        name: "Products",
        id: '2',
        isSelected: false,
        path: '/products'
    },
    {
        name: "Accounst",
        id: "3",
        isSelected: false,
        path: '/accounts'
    }
]

const Sidebar = () => {

    const [selected, setSeletecd] = useState(sidebarItems[0]);


    return (

        <div class="sidebar">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324" height="100px" />
            <ul className='list'>
                {sidebarItems.map((itm, index) => {
                    return <li onClick={() => setSeletecd(itm)} className='list-item' style={{ background: selected.name === itm.name ? 'darkblue' : '', cursor: 'pointer' }}>
                        <Link to={itm.path} style={{ color: selected.name === itm.name ? '#fff' : '#000' }}>
                            {itm.name}
                        </Link>
                    </li>
                })}
            </ul>
        </div>

    );
}

export default Sidebar;