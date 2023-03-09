import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
