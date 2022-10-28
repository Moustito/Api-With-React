import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Category from "./Components/Category";

function App() {
  //State

  //Comportements

  //Render
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
