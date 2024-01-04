import { Outlet } from "react-router-dom";
import Footer from "src/componentes/footer";
import Header from "src/componentes/header";

const Padrao = () =>{
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Padrao;