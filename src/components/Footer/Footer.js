import Background from "./Background";
import "./Footer.scss";
const Footer = () => {
  return (
    <section className="footer">
      <Background />
      <div className="footer__quotes">
        <h2>Everything</h2>
        <h2>Is</h2>
        <h2>A</h2>
        <h2>Choice.</h2>
      </div>
      <h3>© 2021 Copyright. All rights reserved.</h3>
    </section>
  );
};

export default Footer;
