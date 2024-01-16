import styled from "styled-components";
import OsLiArt from "./osLiArt";
import { useEffect, useState } from "react";

const Conteiner = styled.ul`
  display: inline-flex;
  padding-top: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export default function OsArtigos() {

  const [osArtigos, setOsArtigos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/SirReinato/apiMainVeigar/artigos')
      .then((resp) => resp.json())
      .then((dados) => {
        setOsArtigos(dados);
      });
  }, []);


  return (
    <Conteiner>
      {osArtigos.map((todosItens) => {
        return (
          <OsLiArt
            key={todosItens.id}
            url={todosItens.url}
            nome={todosItens.nome}
          />
        );
      })}
    </Conteiner>
  );
}
