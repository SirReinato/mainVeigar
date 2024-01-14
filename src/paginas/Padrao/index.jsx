import { Outlet } from "react-router-dom";
import Footer from "src/componentes/footer";
import Header from "src/componentes/header";
import FavoritosProvider from "src/context";
import styled from "styled-components";

const Conteiner = styled.main`
  width: 1440px;
  padding: 64px;
  margin: 0 auto;

  background: linear-gradient(
    180deg,
    rgba(29, 26, 69, 0.98) 31.99%,
    rgba(40, 24, 63, 0.95) 55.27%,
    rgba(62, 37, 102, 0.93) 87.39%,
    rgba(63, 59, 82, 0.9) 96.96%
  );
`;

const Padrao = () => {
  return (
    <>
      <Header />
      <Conteiner>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </Conteiner>
      <Footer />
    </>
  );
};

export default Padrao;
