import Navbar from "../Components/Navbarrr";
import Hero from "../Components/hero";
import aboutimg from '../Assets/5.jpg';
import Footer from "../Components/Footer";
import ReProjects from "../Components/ReProjects";
function Projects() {
  return (
    <>
     <Navbar />
      <Hero
        cName="hero-about"
        heroImg={aboutimg}
        title="Projects"
        // text="Client Satistaction is Our Frist Priority"
        // buttonText="Hire Now"
        url="/"
        btnClass="hide"
      />
      <ReProjects/>
      <Footer/>
    </>
  );
}
export default Projects;
