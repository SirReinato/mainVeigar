import { useParams } from "react-router-dom";
import ohVideo from "../../json/videos.json";
import styled from "styled-components";

const Conteiner = styled.div`
  background: linear-gradient(
    180deg,
    rgba(29, 26, 69, 0.98) 31.99%,
    rgba(40, 24, 63, 0.95) 55.27%,
    rgba(62, 37, 102, 0.93) 87.39%,
    rgba(63, 59, 82, 0.9) 96.96%
  );
`;

const SectionVideos = styled.section`
  width: 70%;
  height: 600px;
  margin: 0 auto;
  padding-bottom: 64px;
`;

const Titulo = styled.h2`
  color: #fff;
  font-family: Jolly Lodger;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  margin: 0 auto;
  padding: 64px 0;
  line-height: normal;
  letter-spacing: 4.8px;
  text-align: center;
  text-transform: uppercase;
`;

export default function SeuVideo() {
  const parametros = useParams();

  const meuVideo = ohVideo.find((video) => {
    return video.id === Number(parametros.id);
  });

  return (
    <Conteiner>
      <Titulo>PLAYER</Titulo>
      <SectionVideos>
        <iframe
          width="100%"
          height="100%"
          src={meuVideo.url}
          title={meuVideo.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </SectionVideos>
    </Conteiner>
  );
}
