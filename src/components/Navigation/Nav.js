import './Nav.scss'
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useWindowDimensions from './window';


const Nav = () => {
    const [line, setLine] = useState(56)
    const [marginLeft, setMarginLeft] = useState(0)
    const { height, width } = useWindowDimensions();
    const handleHeight = (e) => { 
        setLine(e.currentTarget.offsetWidth)
        if(width > 1200){
            switch (e.currentTarget.textContent) {
                case 'Home':
                    setMarginLeft(0)
                    break;
                    case 'About':
                        setMarginLeft(29)
                    break;
                    case 'Skills':
                        setMarginLeft(58.5)
                    break;
                    case 'Projects':
                        setMarginLeft(86)
                    break;
    
                default:
                    break;
            }
        }
       
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
                <div className="nav__underbar"  style={{width: `calc(${line}px + 20px)`, marginLeft: `calc(${marginLeft}% - 10px)`}}></div>
            </ul>
            <div className="nav__link">
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    </>
)
}

export default Nav
