// import Paralax from './Paralax'
import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import Project from './Project';
import './Projects.scss'

const useStyles = makeStyles((theme) => ({
    card: {
      backgroundColor: 'inherit',
      padding: '20px',
    },
    cardMedia: {
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        // objectFit: 'contain',
        height: '100%',
        // width: '100%',
    },
    img:{
        objectFit: 'contain',
    }
}));
const Projects = () => {
    const classes = useStyles();
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
