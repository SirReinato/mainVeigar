import styled from "styled-components";
import asTags from "../../json/tags.json";
import AsLiTaf from "./AsLiTag";

const Conteiner = styled.ul`
  display: inline-flex;
  padding-top: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Tags = () => {
  return (
    <nav>
        <Conteiner>
            {asTags.map(cadaUma =>{
                return(
                    <AsLiTaf nome={cadaUma.nome}/>
                )
            })}
        </Conteiner>
    </nav>
  );
};

export default Tags;
