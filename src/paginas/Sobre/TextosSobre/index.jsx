import styled from "styled-components";

const Conteiner = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

`;

const Titulo = styled.h3`
  color: #d9d9d9;
  font-family: Jolly Lodger;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;

const Paragrafo = styled.p`
  color: #d9d9d9;
  font-family: Jolly Lodger;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;

export default function TextosSobre({ titulo, conteudo }) {
  return (
    <Conteiner>
        <Titulo>{titulo}</Titulo>
        <Paragrafo>{conteudo}</Paragrafo>
    </Conteiner>
  );
}
