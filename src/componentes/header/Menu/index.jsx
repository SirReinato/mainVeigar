import { Link } from "react-router-dom";
import styled from "styled-components";

const Lista = styled.li`
  a {
    color: #fff;
    font-family: Jolly Lodger;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }
`;

const Menu = ({nome, path}) => {
  return (
    <>
      <Lista>
        <Link to={path}>{nome}</Link>
      </Lista>
    </>
  );
};

export default Menu;
