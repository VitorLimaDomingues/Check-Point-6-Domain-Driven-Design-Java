import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Atendentes from "./routes/Atendentes";
import Clientes from "./routes/Clientes";
import Contratos from "./routes/Contratos";
import Prospectantes from "./routes/Prospectantes";
import Usuarios from "./routes/Usuarios";
import Vendedores from "./routes/Vendedores";

import './index.css';

function App() {

  return (
    <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Atendentes" element={<Atendentes />} />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/Contratos" element={<Contratos />} />
          <Route path="/Prospectantes" element={<Prospectantes />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Vendedores" element={<Vendedores />} />
        </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App
