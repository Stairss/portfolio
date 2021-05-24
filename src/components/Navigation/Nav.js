import './Nav.scss'
const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav__avatar">
                    <h3>DS</h3>
                </div>
                <ul className="nav__list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
