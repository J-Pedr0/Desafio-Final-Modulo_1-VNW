import scss from "./inicio.module.scss";

import Article from "../../components/props/articleInicio/ArticleInicio";

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

      <section className={scss.boxInicio}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={scss.boxCard}>
          {/* <article>
              <img src={card1} alt="" />
              <p>
                Oferece livros a quem não tem acesso, ajudando a reduzir a
                exclusão social.
              </p>
            </article>
            <article>
              <img src={card2} alt="" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </article>
            <article>
              <img src={card3} alt="" />
              <p>
                Fornece conhecimento e inspiração, permitindo que indivíduos
                transformem suas vidas.
              </p>
            </article>
            <article>
              <img src={card4} alt="" />
              <p>
                Garante que todos, independentemente de sua condição, tenham
                oportunidades de aprendizado.
              </p>
            </article> */}

          <Article
            img={card1}
            texto={
              "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."
            }
          />

          <Article
            img={card2}
            texto={"Estimula o hábito da leitura e o aprendizado contínuo."}
          />

          <Article
            img={card3}
            texto={
              "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."
            }
          />

          <Article
            img={card4}
            texto={
              "Garante que todos, independente de sua condição, tenham oportunidades de aprendizado."
            }
          />
        </section>
      </section>
    </main>
  );
}
