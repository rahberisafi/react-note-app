import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
       <nav className="navbar navbar-expand-sm navbar-light bg-light">
         <NavLink to="/" className="navbar-brand">
             Notes App
         </NavLink>
         <ul className="navbar-nav ml-auto">
             <li className="nav-item active">
                 <NavLink className="nav-link" exact to="/">
                     Home
                 </NavLink>
             </li>
             <li className="nav-item active">
                 <NavLink className="nav-link" to="/add">
                     Add Note
                 </NavLink>
             </li>
             <li className="nav-item active">
                 <NavLink className="nav-link" to="/about">
                     About Us
                 </NavLink>
             </li>
         </ul>
       </nav>
    );
};

export default Header;