import Titulos from "src/componentes/Titulos";
import styles from "./Home.module.css";
import Videos from "src/componentes/Videos";

const Home = () => {
  return (
    <main className={styles.conteiner}>

      <section className={styles.videos}>
        <Titulos titulo={"Vídeos"} />
        <Videos/>
      </section>

      <aside className={styles.tags}>
        <Titulos titulo={"Tags"} />
      </aside>
      <article className={styles.pgOf}>
        <Titulos titulo={"Veigar na página oficial do lol"} />
      </article>
    </main>
  );
};

export default Home;
