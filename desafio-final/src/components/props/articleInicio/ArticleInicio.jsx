import scss from "./ArticleInicio.module.scss";

import PropTypes from "prop-types";

export default function Article({ img, texto }) {
  return (
    <article className={scss.article}>
      <img src={img} alt="" />
      <p>{texto}</p>
    </article>
  );
}

Article.propTypes = {
  img: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};