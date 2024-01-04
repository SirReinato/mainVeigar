import styled from "styled-components";

const AsLi = styled.li`
  display: flex;
  padding: 8px 64px 8px 14px;
  justify-content: center;
  align-items: center;
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

export default function AsLiTaf({ nome }) {
  return (
    <AsLi>{nome}</AsLi>
  )
}
