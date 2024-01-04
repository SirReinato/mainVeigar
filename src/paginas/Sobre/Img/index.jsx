import styled from "styled-components"

const Foto = styled.img`
    width: 450px;
    height: 500px;
`

export default function ImgSobre({path}) {
    return(
        <>
            <Foto src={path} alt="foto do veigar" />
        </>
    )
}