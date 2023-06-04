import styled from 'styled-components'

export const Portrait = styled.div`
    img {
        border-radius: 50%;
        object-fit: cover;
        width: 380px;
        height: 350px;
    }
    @media only screen and (max-width: 991px){
        img {
            width: 360px;
            height: 340px;
        }
    }
    @media only screen and (max-width: 843px){
        img {
            width: 240px;
            height: 220px;
        }
    }
    @media only screen and (max-width: 275px){
        img {
            width: 160px;
            height: 140px;
        }
    }
`;

export const RoundedBtn = styled.button`
    color: white;
    border: none;
    border-radius: 30px;
    padding: 0.9rem 1.7rem;
    background-color: #91B0C1;
    font-weight: 600;
`;

export const IconBtn = styled.button`
    margin-right: 10px; /* Add margin to create space between buttons */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    border: none;
    color: #91B0C1; /* Set the desired color for the icon */
    font-size: 30px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #91B0C1;
    }
`;

//SKILLS
export const SkillContainer = styled.ul`
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(82px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    @media only screen and (max-width: 767px){
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }
`;

export const SkillSquare = styled.div`
    width: 80px;
    margin-right: 20px;
    height: 80px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
        font-size: 2em;
        margin-top: 15px;
        background-color: white;
    }
    p {
        font-size: 0.8em;
        font-weight: bold;
        background-color: white;
    }
`;

//PROJECTS
export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
    img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #F5F5F5;
    }

`;

export const TextContainer = styled.div`
  flex: 1;
  margin-top: 20px;
  background-color: white;

  h4, p, span {
    background-color: white;
  }

  @media (min-width: 576px) {
    margin-left: 20px;
  }
`;

export const ProjectLinks = styled.div`
    background-color: white;
    display: flex;
    text-decoration: none;
    a, h5 {
        background-color: white;
        padding-right: 1rem;
        text-decoration: none;
        color: #91B0C1;
    }
`;

//CONTACT 
export const ContactContainer = styled.div`
    background-color: white;
    margin-left: 10rem;
    margin-right: 10rem;
    padding: 6rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
    margin-top: 3rem;
    h4 { 
        background-color: white;
    }
    @media (max-width: 769px) {
        margin-left: 20px;
        margin-right: 20px;
    }
    @media (max-width: 550px) {
       padding: 1rem;
    }
    @media (max-width: 380px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const ContactFlex = styled.div`
    display: flex;
    background-color: white;
    justify-content: center;
    @media (max-width: 769px) {
        flex-direction: column;
    }

`;

export const ContactLinks = styled.div`
  flex: 1 1 300px; /* Set a fixed width for desktop */
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  margin-top: 2rem;
  margin-right: 2rem;
  
  div {
    margin: auto;
  }
  p {
    background-color: white;
    text-align: center;
  }
  .grey-color {
    color: #848484;
  }
  a {
    color: #91B0C1;
  }
  a:hover {
    color: black;
  }
  
  @media (max-width: 769px) {
    flex: 1; /* Reset width for mobile */
  }
  @media (max-width: 408px) {
    margin: 0px 0px 20px 0px;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  margin-top: 2rem;
  form {
    background-color: white;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: white;
`;
