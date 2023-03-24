import styled from "styled-components";
import imageMarvel from "../../assets/image/marvel-principal.webp";

export const ComponentWraper = styled.main`
    height: 100vh;
    width: 100vw;
    background-image: url(${imageMarvel});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const DivBlur = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.3);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        color: white;
    }
`