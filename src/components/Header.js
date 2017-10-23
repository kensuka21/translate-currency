import React from 'react';

const Header = ({title}) => {
    return (
        <div className="header">
            <h2 className="text-center">{title}</h2>
        </div>
    );
};

export default Header;