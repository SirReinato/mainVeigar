import styled from "styled-components";

const OhTitulo = styled.h2`
  color: #fff;
  font-family: Jolly Lodger;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  &::before {
    content: "";
    display: block;
    height: 20px;
    width: 40%;
    margin-bottom: 32px;
    border: 1px solid rgba(39, 23, 61, 0.97);
    background: #fff;
  }
`;

const Titulos = ({ titulo }) => {
  return (
    <>
      <OhTitulo>{titulo}</OhTitulo>
    </>
  );
};

export default Titulos;
