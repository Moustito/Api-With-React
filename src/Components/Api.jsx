import axios from "axios";
import { useEffect } from "react";

export default function Api({ update, url }) {
  //State

  //Comportements
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      update(response.data.results);
    };
    fetchData();
  }, []);

  //Render
  return <div className="App"></div>;
}
