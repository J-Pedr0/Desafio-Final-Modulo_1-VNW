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
        <div className={scss.boxDivContato}>
          <p>4002-8922</p>
        </div>
        <div className={scss.boxSocial}>
          <img src={facebook} alt="ícone facebook" />
          <img src={twitter} alt="ícone twitter" />
          <img src={youtube} alt="ícone youtube" />
          <img src={linkedin} alt="ícone linkedin" />
          <img src={instagram} alt="ícone instagram" />
        </div>
      </section>
      <section>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
