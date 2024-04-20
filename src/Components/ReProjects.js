import "./ReProjects.css";
import ReProjectsData from "../Components/ReProjectsData";
import imgpro1 from "../Assets/5.jpg";
import imgpro2 from "../Assets/6.jpg";
import imgpro3 from "../Assets/7.jpg";
function Projects() {
  return (
    <div className="Projects">
      <h1>Recent Projects</h1>
      <p>Here are the Projects we have done recently</p>
      <div className="projectcard">
        <ReProjectsData
          image={imgpro1}
          heading="Dapp Development"
          text="In this project, We build and deploy a Dapp of our Client"
        />

        <ReProjectsData
          image={imgpro2}
          heading="Dapp Development"
          text="In this project, We build and deploy a Dapp of our Client"
        />

        <ReProjectsData
          image={imgpro3}
          heading="Dapp Development"
          text="In this project, We build and deploy a Dapp of our Client"
        />
      </div>
    </div>
  );
}
export default Projects;
