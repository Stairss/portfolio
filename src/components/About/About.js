import './About.scss'
import Submarine from './Submarine'
import image from '../../assets/unnamed.png'
const About = () => {
    return (
        <div className="about">
            <Submarine />
            <div className="about__info">


                <header className="about__header">
                    <h1>About</h1>
                </header>
                <section className="about__content">
                    <div className="about__image">
                        <img src={image} alt="" />
                    </div>
                    <div className="about__description">
                        <h2>I'm Dawid Spisak</h2>
                        <p>Enthusiastic Web Developer, Freelancer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of Javascript, React, Redux and MERN. Motivated to learn, grow and excel in the Dev industry.
                        </p>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default About


