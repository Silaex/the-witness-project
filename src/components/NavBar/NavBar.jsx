import React from 'react';
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar flex j-start pad-xl fade-in-bottom delay-1">
            <NavLink exact to="/home" activeClassName="active" className="mar-h-lg ft-bold ft-title">Home</NavLink>
            <NavLink to="/projects" activeClassName="active" className="mar-h-lg ft-bold ft-title">Projects</NavLink>
            <NavLink to="/about" activeClassName="active" className="mar-h-lg ft-bold ft-title">About</NavLink>
        </div>
    )
}

export default NavBar;
