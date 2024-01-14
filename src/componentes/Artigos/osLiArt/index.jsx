import { Link } from "react-router-dom";
import styled from "styled-components";

const OsArt = styled.li`
  width: 80%;
  display: flex;
  padding: 8px 24px 8px 14px;
  justify-content: start;
  align-items: start;
  gap: 10px;

  border-radius: 60px;
  border: 2px solid #8577a9;

  color: #fff;
  font-family: Jolly Lodger;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.4px;
  text-transform: uppercase;
`;

export default function OsLiArt({ nome, url }) {
  return (
    <Link to={url} target="_blank">
      <OsArt>{nome}</OsArt>
    </Link>
  );
}
