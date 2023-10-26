import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>LOGO</h1>
          <p>slogan slogan slogan</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Site Map</h4>
          <a href="/">About</a>
          <a href="/">Service</a>
          <a href="/">Contact</a>
        </div>
        <div>
          <h4>Email</h4>
          <p>lalaland@gmail.com</p>
          <p>lalaland@gmail.com</p>
        </div>
        <div>
          <h4>Telephone</h4>
          <p>098 21584131</p>
          <p>098 21584131</p>
          <p>098 21584131</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>LaLaLand</p>
          <p>NO 800</p>
          <p>LaLaRoad</p>
          <p>LaLaTown</p>
          <p>SriLanka</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
