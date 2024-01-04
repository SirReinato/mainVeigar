import styles from './Card.module.css';
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const Card = ({titulo, capa}) =>{
    return (
        <div className={styles.conteiner}>
            <div className={styles.capa}>
                <img src={capa} alt={titulo}/>
            </div>
            <h4 className={styles.titulo}>{titulo}</h4>
            <div className={styles.conCoracao}>
                <GoHeart className={styles.coracao}/>
            </div>
        </div>
    )
}

export default Card;