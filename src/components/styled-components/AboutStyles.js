import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 1000px){
       flex-direction: column;
    }
`;

export const ImgContainer = styled.div`
    padding-left: 5rem;
    padding-bottom: 5rem;
    img {
        border-radius: 20px;
        object-fit: cover;
        width: 560px;
        height: 670px;
    }
    @media only screen and (max-width: 1175px){
        img {
            width: 460px;
            height: 570px;
        }
    }
    @media only screen and (max-width: 1100px){
        img {
            width: 360px;
            height: 470px;
        }
    }
    @media only screen and (max-width: 1000px){
        padding-right: 5rem;
        justify-content: center;
        margin: auto;
        img {
            width: 600px;
            height: 600px;
        }
    }
    @media only screen and (max-width: 768px){
        padding: 2rem;
        justify-content: center;
        margin: auto;
        img {
            width: 400px;
            height: 400px;
        }
    }
    @media only screen and (max-width: 453px){
        img {
            width: 300px;
            height: 300px;
        }
    }
    @media only screen and (max-width: 342px){
        img {
            width: 180px;
            height: 180px;
        }
    }
`;

export const AboutCard = styled.div`
    background-color: white;
    margin-left: 5rem;
    margin-right: 5rem;
    padding: 2rem;
    width: 560px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
    h4, p { 
        background-color: white;
    }
    @media only screen and (max-width: 1000px){
        padding-bottom: 5rem;
        margin: auto;
        width: 600px;
    }
    @media only screen and (max-width: 768px){
        padding: 2rem;
        justify-content: center;
        margin: auto;
        width: 600px;
    }
    @media only screen and (max-width: 634px){
        justify-content: center;
        margin: auto;
        width: 100%;
    }

`;
