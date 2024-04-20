import imgdev from "../Assets/5.jpg";
import imgdev2 from "../Assets/6.jpg";
import "./DeveloperStyles.css";
const Developer = () => {
  return (
    <div className="Developer">
      <h1>Our Developers</h1>
      <div className="dev-block">
        <div className="image">
          <h2>Blockchain Developer</h2>
          <img alt="img" src={imgdev} />

          <h2>React Developer</h2>
          <img alt="img" src={imgdev2} />
        </div>
      </div>
    </div>
  );
};
export default Developer;
