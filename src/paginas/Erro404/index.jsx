import Menu from "src/componentes/header/Menu";
import styles from "./Erro404.module.css";
import { Link } from "react-router-dom";

export default function Erro404() {
  return (
    <section className={styles.conteiner}>
      <h2>404</h2>
      <h3>We lost this page...</h3>
      <h4>
        A página que você esta procurando não foi encontrada <br /> Temos as
        seguintes opções
      </h4>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/favorito"}>Favorito</Link>
          </li>
          <li>
            <Link to={"/sobre"}>Sobre</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
