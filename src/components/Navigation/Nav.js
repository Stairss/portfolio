import './Nav.scss'
import { NavLink, Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav__avatar">

                    <h3><Link to="/">DS</Link></h3>

                </div>
                <ul className="nav__list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
