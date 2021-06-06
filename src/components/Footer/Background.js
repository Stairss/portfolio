import "./Background.scss";
import Slide from "react-reveal/Slide";
const Background = () => {
  return (
    <div className="container">
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="balloon">
        <div className="bottom"></div>
        <div className="basket"></div>
        <div className="rope"></div>
      </div>
    </div>
  );
};

export default Background;
