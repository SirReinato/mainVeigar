import styled from "styled-components";

const Conteiner = styled.footer`
  width: 100%;
  height: 89px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #130d23;
`;

const Texto = styled.h3`
  color: #d9d9d9;
  font-family: Jolly Lodger;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`;

export default function Footer() {
  return (
    <Conteiner>
      <Texto>SITE TREINO - EM DESENVOLVIMENTO</Texto>
    </Conteiner>
  );
}
