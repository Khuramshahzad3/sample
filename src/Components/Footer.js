import "./FooterStyles.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="top">
        <h1>logo</h1>
        <p>Hire our developers and Make life Easy</p>
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
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h1>Projects</h1>
          <a href="/">Status</a>
          <a href="/">Pending</a>
          <a href="/">Approved</a>
          <a href="/">Completed</a>
        </div>
        <div>
          <h1>Community</h1>
          <a href="/">Status</a>
          <a href="/">Pending</a>
          <a href="/">Approved</a>
          <a href="/">Completed</a>
        </div>
        <div>
          <h1>Help</h1>
          <a href="/">Status</a>
          <a href="/">Pending</a>
          <a href="/">Approved</a>
          <a href="/">Completed</a>
        </div>
        <div>
          <h1>Others</h1>
          <a href="/">Status</a>
          <a href="/">Pending</a>
          <a href="/">Approved</a>
          <a href="/">Completed</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
