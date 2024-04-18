import styled from "styled-components";
import AsLiTaf from "./AsLiTag";
import { useEffect, useState } from "react";
import dbJson from "../../json/db.json"
const Conteiner = styled.ul`
  display: inline-flex;
  padding-top: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Tags = ({ setTag }) => {

  const [asTags, setAsTags] = useState(dbJson.tags);

  // useEffect(() => {
  //   fetch('https://my-json-server.typicode.com/SirReinato/apiMainVeigar/tags')
  //     .then((resp) => resp.json())
  //     .then((dados) => {
  //       setAsTags(dados);
  //     });
  // }, []);

  return (
    <nav>
      <Conteiner>
        {asTags.map((cadaUma) => {
          return (
            <AsLiTaf
              nome={cadaUma.nome}
              onClick={() => setTag(cadaUma.tag)}
              key={cadaUma.id}
            ></AsLiTaf>
          );
        })}
      </Conteiner>
    </nav>
  );
};

export default Tags;
