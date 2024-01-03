import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Padrao from "./paginas/Padrao";
import Home from "./paginas/Home";
import Favorito from "./paginas/Favorito";
import Sobre from "./paginas/Sobre";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Padrao/>}>
          <Route index element={<Home/>}/>
          <Route path="/FAVORITO" element={<Favorito/>}/>
          <Route path="/SOBRE" element={<Sobre/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
