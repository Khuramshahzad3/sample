import "./heroStyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg} />
        {/* <video
          className="video"
          src={props.heroImg1}
          muted
          autoPlay
          loop
          typeof="video/mp4"
        ></video> */}
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
