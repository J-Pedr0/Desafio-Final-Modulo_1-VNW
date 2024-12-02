import scss from "./Footer.module.scss";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

export default function Footer() {
  return (
    <footer>
      <section className={scss.boxContato}>
        <div>
          <h3>4002-8922</h3>
        </div>
        <nav className={scss.boxSocial}>
          <a href="">
            <img src={facebook} alt="ícone facebook" />
          </a>
          <a href="">
            <img src={twitter} alt="ícone twitter" />
          </a>
          <a href="">
            <img src={youtube} alt="ícone youtube" />
          </a>
          <a href="">
            <img src={linkedin} alt="ícone linkedin" />
          </a>
          <a href="">
            <img src={instagram} alt="ícone instagram" />
          </a>
        </nav>
      </section>
      <section>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
