import styles from './Card.module.css';
// import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";

const Card = ({titulo, capa}) =>{
    return (
        <div className={styles.conteiner}>
            <div className={styles.capa}>
                <img src={capa} alt={titulo}/>
            </div>
            <h4 className={styles.titulo}>{titulo}</h4>
            <div className={styles.conCoracao}>
                {/* <CiHeart className={styles.coracao}/> */}
            </div>
        </div>
    )
}

export default Card;