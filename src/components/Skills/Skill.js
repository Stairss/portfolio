import "./Skill.scss";
// import styled, { keyframes } from "styled-components";
// import { useInView } from "react-intersection-observer";
import Slide from "react-reveal/Slide";

/* const Animation = (skill) => keyframes`
    0% {  width: 0%; } 
    100% {  width: ${skill}%; }
`;
const Progress = styled.span`
  animation-name: ${(props) => Animation(props.skill)};
  animation-delay: ${(props) => props.delay}s;
 background-color: ${(props) => props.color};
  position: absolute;
  width: 0%;
  height: 100%;
  border-radius: 5px;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  }
`; */

const Skill = ({ lang, color, delay, skill }) => {
  return (
    <ul className="skill">
      <li>
        <div className="skill__title">
          <h3>{lang}</h3>
        </div>
        <div className="skill__container">
          <Slide left cascade delay={delay}>
            <span
              className="skill__span"
              style={{ backgroundColor: `${color}`, width: `${skill}%` }}
            ></span>
          </Slide>
          {/* <Progress color={color} delay={delay} skill={skill}></Progress> */}
        </div>
      </li>
    </ul>
  );
};

export default Skill;
