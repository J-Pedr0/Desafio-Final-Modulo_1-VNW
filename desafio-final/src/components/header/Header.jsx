import scss from "./Header.module.scss";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Eu sou a header</h1>
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
    </header>
  );
}
