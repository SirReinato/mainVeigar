import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Titulos from "src/componentes/Titulos";
import Videos from "src/componentes/Videos";
import Tags from "src/componentes/Tags";
import OsArtigos from "src/componentes/Artigos";
import PagOf from "src/componentes/PagOf";

import videosJson from "../../videos.json";


const Home = () => {
  const [osVideos, setOsVideos] = useState(videosJson);


  // filtros da tag--------------------
  const [tag, setTag] = useState(0)

  useEffect(() => {

    const videoFiltrado = videosJson.filter(video =>{

      const filtroPorTag = !tag || video.tagId === tag;
      return filtroPorTag
    })
    
    setOsVideos(videoFiltrado)
  }, [tag]);
  // fim filtros da tag--------------------


  return (
    <main className={styles.conteiner}>
      <section className={styles.videos}>
        <Titulos titulo={"Vídeos"} />
        <Videos 
          osVideos={osVideos} 
          key={osVideos.id}/>
      </section>

      <aside className={styles.tags}>
        <div>
          <Titulos titulo={"Tags"} />
          <Tags setTag={setTag}/>
        </div>
        <div className={styles.atigos}>
          <Titulos titulo={'ARTIGOS'} />
          <OsArtigos/>
        </div>
      </aside>

      <article className={styles.pgOf}>
        <Titulos titulo={"Veigar na página oficial do lol"} />
        <PagOf/>
      </article>
    </main>
  );
};

export default Home;
