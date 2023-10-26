import Hero from "../components/Hero";
import Navbar from "../components/Nanvbar";
import Footer from "../components/Footer";
import AboutImg from "../assets/bc73468c7f41457f6cff981c380823ee3fe0.jpg";
import ContactFrom from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactFrom />
      <Footer />
    </>
  );
}

export default Contact;
