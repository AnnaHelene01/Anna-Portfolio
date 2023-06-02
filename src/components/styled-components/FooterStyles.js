import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #91B0C1;
  color: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  background-color: #91B0C1;
  display: flex;
  gap: 5rem;
  svg {
    background-color: #91B0C1;
  }
  a {
    text-decoration: none;
  }
  @media only screen and (max-width: 510px){
        gap: 1rem;
    }
`;