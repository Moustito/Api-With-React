import "./App.css";
import { useState } from "react";
import Api from "./Components/Api";
import List from "./Components/List";
import Spotlight from "./Components/Spotlight";

function App() {
  //State
  const [loading, setLoading] = useState(false);

  //Comportements

  //Render
  return (
    <div className="App">
      <h1>APP API</h1>
      <List />
      <Spotlight />
    </div>
  );
}

export default App;
