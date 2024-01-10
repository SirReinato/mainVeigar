import styled from "styled-components";
import styles from "./Favorito.module.css";
import { useFavoritoContext } from "src/context";
import Card from "src/componentes/Card";

const Titulo = styled.h2`
  color: #fff;
  font-family: Jolly Lodger;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.8px;
  text-align: center;
  text-transform: uppercase;
`;

const Favorito = () => {
    const {favorito} = useFavoritoContext();

  return (
    <section className={styles.conteiner}>
      <Titulo>Favoritos</Titulo>
      <div className={styles.videos}>
        {favorito.map(fav =>{
            return (
                <Card {...fav} key={fav.id}/>
            )
        })}
      </div>
    </section>
  );
};

export default Favorito;
