import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Home from "./components/presentacionales/Home";

function App() {
  return (
    <div className="App mx-5">
      <div className="d-flex col-8 flex-column mx-auto">
        <div className="d-flex justify-content-center mb-5">
          <h1>Rental Online</h1>
        </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
