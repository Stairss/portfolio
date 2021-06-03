import Paralax from './Paralax'
import Project from './Project';
import './Projects.scss'

const Projects = () => {
    return (
        <div className="projects">
            {/* <Paralax /> */}
    <div className="projects__container">
       <div className="projects__header">
       <h1>Projects</h1>
       </div>
            <div className="projects__content">
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
                <Project src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"/>
            </div>
        </div>
        </div>
    )
}

export default Projects
