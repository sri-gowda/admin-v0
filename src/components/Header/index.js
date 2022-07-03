import React from 'react';

const Header = ({ handleClick, headerContentRef }) => {

    return (
        <div className='header' >
            <div className='header-content' id="header-content" ref={headerContentRef}>
                <i className="fa fa-bars" id="toggle-menu" onClick={handleClick} style={{ color: '#fff' }}></i>
                <input className='search' />
            </div>
        </div>
    );
}

export default Header;