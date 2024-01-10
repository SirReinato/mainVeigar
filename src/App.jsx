import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Padrao from "./paginas/Padrao";
import Home from "./paginas/Home";
import Favorito from "./paginas/Favorito";
import Sobre from "./paginas/Sobre";
import SeuVideo from "./paginas/Video";
import Erro404 from "./paginas/Erro404";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Padrao/>}>
          <Route index element={<Home/>}/>
          <Route path="/FAVORITO" element={<Favorito/>}/>
          <Route path="/SOBRE" element={<Sobre/>}/>
          <Route path=":id" element={<SeuVideo/> } />
        </Route>
        <Route path="*" element={<Erro404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
