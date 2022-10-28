import { useState, useEffect } from "react";
import axios from "axios";

export default function Category() {
  //State
  const [data, setData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR";

  //Comportements
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const result = await response?.data;

        setData(result.genres);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  //Render
  return (
    <div className="App">
      <h1>Catégories</h1>
      {console.log(data)}
      <select>
        <option value="">--Please choose an option--</option>
        {data.map((item) => (
          <option key={item.id} value={item.name}>
            <p>{item.name}</p>
          </option>
        ))}
      </select>
    </div>
  );
}
