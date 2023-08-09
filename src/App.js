import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home/Home";
import { SinglePage } from "./component/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlePage/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
