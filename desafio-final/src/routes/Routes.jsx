import { Routes, Route } from "react-router-dom";

import Inicio from "../pages/inicio/Inicio";
import Doados from "../pages/doados/Doados";
import QueroDoar from "../pages/queroDoar/QueroDoar";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/doados" element={<Doados />} />
      <Route path="/querodoar" element={<QueroDoar />} />
    </Routes>
  );
}
