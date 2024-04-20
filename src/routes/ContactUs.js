import Navbar from "../Components/Navbarrr";
import Hero from "../Components/hero";
import aboutimg from '../Assets/5.jpg';
import ContactForm from "../Components/ContackForm";
import Footer from "../Components/Footer";
function Contact() {
    return (
      <>
        <Navbar />
      <Hero
        cName="hero-about"
        heroImg={aboutimg}
        title="Contact Us"
        // text="Client Satistaction is Our Frist Priority"
        // buttonText="Hire Now"
        url="/"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
      </>
    );
  }
  export default Contact;