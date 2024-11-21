import scss from "./Main.module.scss";

import Inicio from "../../pages/inicio/Inicio";
import Doados from "../../pages/doados/Doados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Main() {
  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/querodoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>
      </main>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
