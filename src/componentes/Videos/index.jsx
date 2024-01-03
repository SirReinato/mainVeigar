import styles from './Videos.module.css';
import osVideos from '../../json/videos.json'
import Card from '../Card';

const Videos = () =>{
    return (
        <div className={styles.conteiner}>
           {osVideos.map(video =>{
            return(
                <Card capa={video.capa} titulo={video.titulo} key={video.key} />
            )
           })}
        </div>
    )
}

export default Videos;