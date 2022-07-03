import React from 'react';

const Button = ({ type, varient, children, onClick }) => {

    return (
        <button type={type} className={`${varient === 'PRIMARY' ? 'primary-btn' : 'secondary-btn'}`} onClick={onClick}>{children}</button>
    );
}

export default Button;