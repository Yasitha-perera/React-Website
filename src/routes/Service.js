import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Nanvbar";
import AboutImg from "../assets/hd-mountains-wallpaper-b4zo4l42aiskbvab.jpg";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Products"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
