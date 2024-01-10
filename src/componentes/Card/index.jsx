import styles from "./Card.module.css";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useFavoritoContext } from "src/context";

const Card = ({ titulo, capa, id }) => {
  const { favorito, addFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);

  const Icone = ehFavorito ? <GoHeartFill /> : <GoHeart />;

  return (
    <div className={styles.conteiner}>
      <div className={styles.capa}>
        <img src={capa} alt={titulo} />
      </div>
      <h4 className={styles.titulo}>{titulo}</h4>
      <div
        className={styles.conCoracao}
        onClick={() => {
          addFavorito({ id, titulo, capa });
        }}
      >
        {Icone}
      </div>
    </div>
  );
};

export default Card;
