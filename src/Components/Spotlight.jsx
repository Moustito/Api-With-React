import { useState } from "react";
import Api from "./Api";
import Carousel from "./Carousel";

export default function Spotlight() {
  //State
  const [data, setData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  //Comportements

  //Render
  return (
    <div className="App">
      <h1>Spotlight</h1>
      <Api setData={setData} url={url} />
      <Carousel data={data} />
    </div>
  );
}
