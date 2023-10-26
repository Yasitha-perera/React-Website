import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Nanvbar";
import AboutImg from "../assets/Mountain-Lake-Reflection-in-Nature-Scenery-4K-Wallpaper.jpg";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About "
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
