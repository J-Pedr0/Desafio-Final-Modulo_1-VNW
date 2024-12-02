import scss from "./Doados.module.scss";

import Article from "../../components/props/articleLivroDoados/ArticleLivroDoado";
import livro from "../../assets/livro.png";

export default function Doados() {
  return (
    <main className={scss.boxDoados}>
      <section className={scss.boxTitulo}>
        <h2>Livros Doados</h2>
      </section>
      <section className={scss.boxLivros}>
        {/* <article>
          <img src={livro} alt="Imagem do livro o protagonista" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article> */}

        <Article
          linkImg={livro}
          titulo={"O Protagonista"}
          autor={"Susanne Andrade"}
          genero={"Ficção"}
        />

        <Article
          linkImg={livro}
          titulo={"O Protagonista"}
          autor={"Susanne Andrade"}
          genero={"Ficção"}
        />
      </section>
    </main>
  );
}
