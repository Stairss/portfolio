import './About.scss'
import Submarine from './Submarine'
import image from '../../assets/unnamed.png'
import Octocat from './Octocat'
import { Wave, Random } from 'react-animated-text';
const About = () => {
    return (
        <div className="about">
            <div className="about__info">
                <h1>
                    <Wave text="I'm Dawid Spisak" effect="stretch" effectChange={2.0} />
                </h1>
                <p>Enthusiastic Web Developer, Freelancer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Javascript, React, Redux and MERN. Motivated to learn, grow and excel in the Dev industry.
                </p>
            </div>
            <div className="about__animations">
                <Octocat />
                <Submarine />
            </div>
        </div>
    )
}

export default About



