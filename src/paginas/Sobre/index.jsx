import Titulos from "src/componentes/Titulos";
import styles from "./Sobre.module.css";
import styled from "styled-components";
import ImgSobre from "./Img";
import TextosSobre from "./TextosSobre";

const Titulo = styled.h3`
  color: #fff;
  font-family: Jolly Lodger;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;

const Sobre = () => {
  return (
    <section className={styles.conteiner}>
      <Titulo>sobre</Titulo>
      <section className={styles.ohGrid}>

        <ImgSobre className={styles.foto01} path={'https://i.pinimg.com/564x/ae/3e/82/ae3e821fef26cf1f76d8d86b27fe8512.jpg'}/>

        <TextosSobre className={styles.texto01} titulo={'sobre'} conteudo={`Olá, sou Renato e esse é o site main veigar, aqui você encontrará tudo o que precisa para aprender a jogar com o Veigar, um dos campeões mais populares do League of Legends. ${<br/>} O objetivo do site main Veigar é fornecer aos jogadores de League of Legends um recurso completo para aprender a jogar com o Veigar. Nossos vídeos são projetados para serem informativos e divertidos, e nosso site é fácil de navegar.`}/>

        <TextosSobre className={styles.texto02} titulo={'react'} conteudo={`Além de ser um recurso completo para aprender a jogar com o Veigar, o site também tem como objetivo o aperfeiçoamento e prática do React JS`}/>

        <ImgSobre className={styles.foto02} path={'https://i.pinimg.com/564x/5a/d6/84/5ad684dd183e7685a3fd096b756fe648.jpg'}/>

      </section>
    </section>
  );
};

export default Sobre;
