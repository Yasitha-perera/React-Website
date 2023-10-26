import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/HD-wallpaper-green-tea-drinks-background-leave-white-background-tea-tables-leaves-green-cup-table-drink-white-cups.jpg";
import Trip2 from "../assets/2-4.jpg";
import Trip3 from "../assets/apr1.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Popular Products</h1>
      <p>
        {" "}
        Amidst the hustle and bustle of city life, there's a certain charm in
        finding solace in a quiet park.
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Green Tea"
          text="From the health benefits of antioxidants 
              to the sheer pleasure of sipping a favorite blend,
              tea remains a beloved elixir that connects us to
               tradition and provides a pause in the hustle and
                bustle of our modern lives."
        />

        <TripData
          image={Trip2}
          heading="Green Tea2"
          text="From the health benefits of antioxidants 
              to the sheer pleasure of sipping a favorite blend,
              tea remains a beloved elixir that connects us to
               tradition and provides a pause in the hustle and
                bustle of our modern lives."
        />

        <TripData
          image={Trip3}
          heading="Green Tea3"
          text="From the health benefits of antioxidants 
              to the sheer pleasure of sipping a favorite blend,
              tea remains a beloved elixir that connects us to
               tradition and provides a pause in the hustle and
                bustle of our modern lives."
        />
      </div>
    </div>
  );
}
export default Trip;
