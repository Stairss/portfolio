import Paralax from './Paralax';
import Skill from './Skill';
import './Skills.scss';
const Skills = () => {
    return (
        <div className="skills">
        <Paralax />
        <div className="skills__content">
           <Skill lang="HTML5" color="#c0392b" delay={0} skill={100}/>
           <Skill lang="CSS/SASS" color="#1199ff" delay={.7} skill={95}/>
           <Skill lang="ReactJS" color="#9b59b6" delay={1.4} skill={80}/>
           <Skill lang="JavaScript" color="#ffa500" delay={2.1} skill={75}/>
           <Skill lang="Git" color="#27ae60" delay={2.8} skill={60}/>
           <Skill lang="Redux" color="#2FADAB" delay={3.5} skill={50}/>
        </div>
        </div>
    )
}

export default Skills
