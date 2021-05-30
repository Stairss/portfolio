import './Skill.scss';
import styled, {keyframes} from 'styled-components';

const Animation = (skill) => keyframes`
    0% {  width: 0%; } 
    100% {  width: ${skill}%; }
` 
const Progress = styled.span`
    animation-name: ${props => Animation(props.skill)};
    animation-delay: ${props => props.delay}s;
    background-color: ${props => props.color};
    position: absolute;
	  width: 0%;
	  height: 100%;
	  border-radius: 5px;
	  animation-duration: 2s;
	  animation-timing-function: ease-out;
	  animation-fill-mode: both;
`



const Skill = ({lang, color, delay, skill}) => {
  
    return (
<ul className="skill">
  <li>
    <div className="skill__title">
      <h3>{lang}</h3>
    </div>
    <div className="skill__container">
      <Progress color={color} delay={delay} skill={skill}></Progress>
    </div>
  </li>










 {/*  <li>
    <div className="progressbar-title">
      <h3>CSS / SASS</h3>
      <span className="percent" id="css-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progressblue" id="progress-css"></span>
    </div>
  </li>
  
  <li>
    <div className="progressbar-title">
      <h3>JavaScript / jQuery</h3>
      <span className="percent" id="javascript-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progresspurple" id="progress-javascript"></span>
    </div>
  </li>
  
  <li>
    <div className="progressbar-title">
      <h3>PHP</h3>
      <span className="percent" id="php-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progressorange" id="progress-php"></span>
    </div>
  </li>
  
  <li>
    <div className="progressbar-title">
      <h3>AngularJS</h3>
      <span className="percent" id="angular-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progressgreen" id="progress-angular"></span>
    </div>
  </li> */}
  
</ul>
    )
}

export default Skill
