import Mountain1 from "../assets/pexels-photo-230490.jpg";
import Mountain2 from "../assets/pexels-photo-3123792.jpeg";
import Mountain3 from "../assets/4cf10db3838f0e0180909c5425830b61.jpg";
import Mountain4 from "../assets/9cec9d69b97ba4a0c123877c5290bfc8.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular pulular</h1>
      <p> Blorple flibberwaffle snizzleflop</p>
      <DestinationData
        className="first-des"
        heading="Climate Change and Environmental Sustainability"
        text="Blorple flibberwaffle snizzleflop zibberjabber mubblejumble
       flibberdoodle shibberish glopflap whifflewaffle gobbledygook
        zonkawonka zibberzabber zoodlepoodle.Please note that gibberish
         is essentially meaningless or n onsensical language and serves
          no real purpose in communication. If you have any questions or
           need assistance with something specific, feel free to ask!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="it imparts create a ritual that transcends borders"
        text="Amidst the bustling cityscape, hidden within the narrow 
      alleyways, there lies a quaint little bookstore. Its shelves are 
      adorned with dusty tomes and well-worn classics, each bearing the
       weight of stories untold. The creaking wooden floors tell tales 
       of countless footsteps that have wandered here in search of 
       knowledge or escape. As the sun's golden rays filter through the 
       haphazardly placed books, a sense of serenity envelops this 
       charming oasis, where the magic of literature and the passage of 
       time dance in harmonious rhythm."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
