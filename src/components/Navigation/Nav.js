import './Nav.scss'
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useWindowDimensions from './window';


const Nav = () => {
    
return (
    <>
        <nav className="nav">
            <div className="nav__avatar">

                <h3><Link to="/">DS</Link></h3>

            </div>
            <ul className="nav__list">
                <li><NavLink to="/" exact className="nav__underline">Home</NavLink></li>
                <li><NavLink to="/about"   className="nav__underline">About</NavLink></li>
                <li><NavLink to="/skills" className="nav__underline" >Skills</NavLink></li>
                <li><NavLink to="/projects"  className="nav__underline">Projects</NavLink></li>
            </ul>
            <div className="nav__link">
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    </>
)
}

export default Nav
