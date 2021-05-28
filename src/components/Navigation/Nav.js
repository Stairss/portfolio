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
                </ul>
                <div className="nav__link">
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav
