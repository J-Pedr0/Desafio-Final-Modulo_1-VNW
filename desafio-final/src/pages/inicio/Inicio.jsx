import scss from "./inicio.module.scss";

import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

export default function Inicio() {
  return (
    <main>
      <section className={scss.post}>
        <div>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </div>
      </section>
      <article className={scss.boxInicio}>
        <section>
          <h2>Por que devo doar?</h2>
          <article className={scss.boxCard}>
            <div>
              <img src={card1} alt="" />
              <p>
                {" "}
                Oferece livros a quem não tem acesso, ajudando a reduzir a
                exclusão social.
              </p>
            </div>
            <div>
              <img src={card2} alt="" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </div>
            <div>
              <img src={card3} alt="" />
              <p>
                Fornece conhecimento e inspiração, permitindo que indivíduos
                transformem suas vidas.
              </p>
            </div>
            <div>
              <img src={card4} alt="" />
              <p>
                Garante que todos, independentemente de sua condição, tenham
                oportunidades de aprendizado.
              </p>
            </div>
          </article>
        </section>
      </article>
    </main>
  );
}
