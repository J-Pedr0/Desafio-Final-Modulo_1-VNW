import scss from "./Doados.module.scss";

import livroProtagonista from "../../assets/livro_protagonista.png";

export default function Doados() {
  const livros = [
    {
      id: 1,
      imagem: livroProtagonista,
      titulo: "O Protagonista",
      autor: "Susanne Andrade",
      genero: "Ficção",
    },
  ];

  return (
    <main>
      <section className={scss.boxTitulo}>
        <h1>Livros Doados</h1>
      </section>
      <section className={scss.boxLivros}>
        {livros.map((livro) => (
          <div key={livro.id} className={scss.boxCard}>
            <img src={livro.imagem} alt={`Capa do livro ${livro.titulo}`} />
            <p>{livro.titulo}</p>
            <p>{livro.autor}</p>
            <p>{livro.genero}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
