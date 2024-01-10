import { Outlet } from "react-router-dom";
import Footer from "src/componentes/footer";
import Header from "src/componentes/header";
import FavoritosProvider from "src/context";

const Padrao = () => {
  return (
    <>
      <Header />
      <FavoritosProvider>
        <Outlet />
      </FavoritosProvider>
      <Footer />
    </>
  );
};

export default Padrao;
