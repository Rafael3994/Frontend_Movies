import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import Home from "./components/presentacionales/Home";
import NavbarWithoutLogin from "./components/presentacionales/NavbarWithoutLogin";
import NavbarWithLogin from "./components/presentacionales/NavbarWithLogin";
import Layout from "./components/presentacionales/Layout";
import RegisterUser from "./components/contenedores/users/RegisterUser";
import LoginUser from "./components/contenedores/users/LoginUser";
import Alquiler from "./components/contenedores/alquiler/Alquiler";
import ModificarUser from "./components/contenedores/users/ModificarUser";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* WITHOUT LOGIN */}
        <Route path="" element={<NavbarWithoutLogin />}>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="registerUser" element={<RegisterUser />} />
            <Route path="loginUser" element={<LoginUser />} />
          </Route>
        </Route>
        {/* WITH LOGIN */}
        <Route path="" element={<NavbarWithLogin />}>
          <Route path="" element={<Layout />}>
            <Route path="/alquiler" element={<Alquiler />} />
            <Route path="/modificarUser" element={<ModificarUser />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
