import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Home from "./components/presentacionales/Home";
import NavbarWithoutLogin from "./components/presentacionales/NavbarWithoutLogin";
import Layout from "./components/presentacionales/Layout";
import RegisterUser from "./components/contenedores/Users/RegisterUser";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="" element={<NavbarWithoutLogin />}>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="registerUser" element={<RegisterUser />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
