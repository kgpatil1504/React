import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return(
        <>
        <div className="menu_style" >
        <NavLink exact activeClassName="a.active_class"  to="/"> About Us </NavLink>
        <NavLink exact activeClassName="a.active_class" to="/service"> Services </NavLink>
        <NavLink exact activeClassName="a.active_class" to="/user/user"> User </NavLink>
        <NavLink exact activeClassName="a.active_class" to="/contact"> Contact Us </NavLink>
        </div>
        {/* <a href="/"> About Us </a>
        <a href="/contact"> Contact </a> */}
        </>
    );
};

export default Menu;