import Titulos from 'src/componentes/Titulos';
import styles from './Sobre.module.css';
import styled from 'styled-components';

const Titulo = styled.h3`

`

const Sobre = () =>{
    return (
        <section className={styles.conteiner}>
            <Titulos titulo={'Sobre'}/>
        </section>
    )
}

export default Sobre;