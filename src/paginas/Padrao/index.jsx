import { Outlet } from "react-router-dom";
import Header from "src/componentes/header";

const Padrao = () =>{
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Padrao;