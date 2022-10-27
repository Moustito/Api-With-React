import Api from "./Api";
import { useState } from "react";

export default function List() {
  //State
  const [dataList, setDataList] = useState([]);
  const url =
    "https://api.themoviedb.org/3/trending/all/day?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR";
  //Comportements

  //Render
  return (
    <div className="App">
      <h1>List</h1>
      <Api update={setDataList} url={url} />
      <ul>
        {dataList.map((item) => (
          <li key={item.id}>
            <p>
              {item.title}
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
