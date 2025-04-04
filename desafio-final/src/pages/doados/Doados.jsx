import scss from "./Doados.module.scss";

import Article from "../../components/props/articleLivroDoados/ArticleLivroDoado";
import livro from "../../assets/livro.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    try {
      const response = await axios.get(
        "https://desafio-2-api-livros-vai-na-web-2lli.onrender.com/livros"
      );
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar os livros: ", error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <main className={scss.boxDoados}>
      <section className={scss.boxTitulo}>
        <h2>Livros Doados</h2>
      </section>
      <section className={scss.boxLivros}>
        {/* {livros.map((item) => (
        <article key={item.id}>
          <img src={item.image_url} alt={item.titulo} />
          <h3>{item.titulo}</h3>
          <p>{item.autor}</p>
          <p>{item.categoria}</p>
        </article>
        ))} */}

        {livros.map((item) => (
          <Article
            key={item.id}
            linkImg={item.image_url}
            titulo={item.titulo}
            autor={item.autor}
            genero={item.categoria}
          />
        ))}

        {/* <Article
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
        /> */}
      </section>
    </main>
  );
}
