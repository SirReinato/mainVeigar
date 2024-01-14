import styled from "styled-components";
import asTags from "./tags.json";
import AsLiTaf from "./AsLiTag";

const Conteiner = styled.ul`
  display: inline-flex;
  padding-top: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Tags = ({ setTag }) => {
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
