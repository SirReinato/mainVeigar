import Titulos from "src/componentes/Titulos";
import styles from "./Home.module.css";
import Videos from "src/componentes/Videos";
import Tags from "src/componentes/Tags";

const Home = () => {
  return (
    <main className={styles.conteiner}>
      <section className={styles.videos}>
        <Titulos titulo={"Vídeos"} />
        <Videos />
      </section>

      <aside className={styles.tags}>
        <div>
          <Titulos titulo={"Tags"} />
          <Tags />
        </div>
        <div className={styles.atigos}>
          <Titulos titulo={'ARTIGOS'} />
        </div>
      </aside>
      <article className={styles.pgOf}>
        <Titulos titulo={"Veigar na página oficial do lol"} />
      </article>
    </main>
  );
};

export default Home;
