import styled from "styled-components";
import osArtigos from "../../json/artigos.json";
import OsLiArt from "./osLiArt";

const Conteiner = styled.ul`
  display: inline-flex;
  padding-top: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export default function OsArtigos() {
    return (
        <Conteiner>
            {osArtigos.map(todosItens =>{
                return (
                    <OsLiArt nome={todosItens.nome}/>
                )
            })}
        </Conteiner>
    )
}