import "./App.css";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { RecipePage } from "./RecipePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
