import Developer from "../Components/Developer";
import Navbar from "../Components/Navbarrr";
import Hero from "../Components/hero";
import Footer from "../Components/Footer";
import ReProjects from "../Components/ReProjects";
import Destination from "../Components/Destination";

import video from "../Assets/vid.mp4";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://plus.unsplash.com/premium_photo-1661284806850-b709cb1262b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        // heroImg="https://youtu.be/DbRXv5TXMEE?si=Z8BhMeVgWA2GFzcB"
        // heroImg1={video}
        title="Welcome to Our Website"
        text="Client Satistaction is Our Frist Priority"
        buttonText="Hire Now"
        url="/"
        btnClass="show"
      />
      <Destination/>
      {/* <Developer/> */}
      <ReProjects/>
      <Footer/>
    </>
  );
}
export default Home;
