import styles from './Videos.module.css';
import osVideos from '../../json/videos.json'
import Card from '../Card';

const Videos = ({osVideos = []}) =>{
    return (
        <div className={styles.conteiner}>
           {osVideos.map(video =>{
            return(
                <Card {...video} key={video.id} />
            )
           })}
        </div>
    )
}

export default Videos;