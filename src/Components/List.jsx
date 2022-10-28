import { useState } from "react";
import Api from "./Api";
import Carousel from "./Carousel";

export default function List() {
  //State
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const url =
    "https://api.themoviedb.org/3/trending/all/day?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR";

  //Comportements

  //Render
  return (
    <div className="App">
      <h1>List</h1>
      <Api setData={setData} url={url} />
      {console.log(data)}
      <Carousel data={data} />
    </div>
  );
}
