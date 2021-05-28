import './Nav.scss'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
    const [width, setwWdth] = useState(56)
    const handleHeight = (e) => {
        setwWdth(e.currentTarget.offsetWidth)
    }
    
return (
    <>
        <nav className="nav">
            <div className="nav__avatar">

                <h3><Link to="/">DS</Link></h3>

            </div>
            <ul className="nav__list">
                <li><NavLink to="/" onClick={handleHeight}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={handleHeight} >About</NavLink></li>
                <li><NavLink to="/skills" onClick={handleHeight}>Skills</NavLink></li>
                <li><NavLink to="/projects" onClick={handleHeight}>Projects</NavLink></li>
                <div className="nav__underbar"  style={{width: `${width}px`}}></div>
            </ul>
            <div className="nav__link">
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    </>
)
}

export default Nav
