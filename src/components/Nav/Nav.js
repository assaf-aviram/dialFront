import React from 'react';

const Nav = ({ children, ...rest }) => (
    <header {...rest}>
        {children}
    </header>
);

export default Nav;