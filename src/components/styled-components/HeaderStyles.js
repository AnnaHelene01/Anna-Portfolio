import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    background-color: #91B0C1;
    color: white;
    border-bottom: 0.5px dotted grey;
    z-index: 10001;
`;

export const HeaderLogo = styled.h3`
    background-color: #91B0C1;
    a {
        color: white;
        text-decoration: none;
        background-color: #91B0C1;
        font-family: 'Bowlby One', cursive;
    }
`;

export const NavMenu = styled.nav`
  background-color: #91B0C1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin: 0 2rem;
    padding: 1rem;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    background-color: #91B0C1;
    font-family: 'Roboto', sans-serif;

    &:hover {
      color: #E6EEF2;
    }
  }

  @media only screen and (max-width: 950px){
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        background-color: #91B0C1;
        transition: 1s;
        transform: translateY(-100vh);
        z-index: 1;
        &.responsive {
        transform: none;
        }
    }
    a {
        font-size: 1.2rem;
    }
`;


export const NavButton = styled.button`
  font-size: 1.8rem;
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  visibility: hidden;
  opacity: 0;
   svg{
    background-color: #91B0C1;
   }
  @media only screen and (max-width: 950px){
        visibility: visible;
        opacity: 1;
        background-color: #91B0C1;
    }
`;
