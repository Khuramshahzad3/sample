import "./ReProjects.css";

function ReProjectsData(props) {
  return (
    <>
      <div className="pcards">
        <div className="pimage">
          <img alt="image" src={props.image} />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
}
export default ReProjectsData;
