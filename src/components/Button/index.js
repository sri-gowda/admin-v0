import React from 'react';

const Button = ({ type, children }) => {

    return (
        <button className={`${type === 'PRIMARY' ? 'primary-btn' : 'secondary-btn'}`}>{children}</button>
    );
}

export default Button;