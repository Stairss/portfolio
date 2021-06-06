import Background from "./Background";
import "./Footer.scss";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";

const Footer = () => {
  return (
    <section className="footer">
      <Background />
      <LightSpeed>
        <div className="footer__quotes">
          <h2>Everything</h2>
          <h2>Is</h2>
          <h2>A</h2>
          <h2>Choice.</h2>
        </div>
      </LightSpeed>

      <h3>
        {" "}
        <Bounce bottom>© 2021 Copyright. All rights reserved. </Bounce>
      </h3>
    </section>
  );
};

export default Footer;
