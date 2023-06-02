import React from 'react'
import projectexam2 from '../../../assets/projectexam2.png'
import annabiz from '../../../assets/annabiz.png'
import tømdødsbo from '../../../assets/tømdødsbo.png'
import semester2 from '../../../assets/semester2-project.png'
import { CardContainer, ImageContainer, ProjectLinks, TextContainer } from '../../../components/styled-components/MainStyles';

const Projects = () => {
  return (
    <>
     <h2 className='mt-5 mb-2'>PROJECTS</h2> 
     <p className='mb-5'>Note that if you visit my LIVE sites and want to register, you have to use @noroff.no 
      or @stud.noroff.no for email since Noroff created the REST API that way!
     </p>
     <CardContainer>
      <ImageContainer>
        <img src={projectexam2} alt="Project Exam 2 project" />
      </ImageContainer>
      <TextContainer>
        <h4>Project Exam 2</h4>
        <span className='d-flex mt-3'>
           <p>Technologies Used: <span className='blue-text-colour'>HTML</span>, <span className='blue-text-colour'>CSS</span>, <span className='blue-text-colour'>JavaScript</span>, <span className='blue-text-colour'>REST API</span>, <span className='blue-text-colour'>React</span>, <span className='blue-text-colour'>React-Hooks</span>, <span className='blue-text-colour'>React-Redux</span>, <span className='blue-text-colour'>Styled-Components</span>, <span className='blue-text-colour'>Datepicker</span>, <span className='blue-text-colour'>Slick Carousel</span>, <span className='blue-text-colour'>React Bootstrap</span>, <span className='blue-text-colour'>React-Router-Dom</span></p>
        </span>
        <p>Holidaze is a newly launched accommodation booking site, where I have developed a brand new front end for their application. Primarily built in React
        </p>
        <p>This was my fourth and last exam during my education at Noroff. The assessment of the grade is still ongoing!</p>
        <ProjectLinks className='d-flex'>
            <a href='https://holidaze-projectexam.netlify.app/' target='_blank' rel='noopener noreferrer'><h5>Live</h5></a>
            <a href='https://github.com/AnnaHelene01/holidaze-exam' target='_blank' rel='noopener noreferrer'><h5>Repo</h5></a>
        </ProjectLinks>
      </TextContainer>
    </CardContainer>

    <CardContainer>
      <ImageContainer>
        <img src={annabiz} alt="Annabiz project" />
      </ImageContainer>
      <TextContainer>
        <h4>Online Shop - AnnaBiz</h4>
        <span className='d-flex mt-3'>
           <p>Technologies Used: <span className='blue-text-colour'>HTML</span>, <span className='blue-text-colour'>CSS</span>, <span className='blue-text-colour'>JavaScript</span>, <span className='blue-text-colour'>REST API</span>, <span className='blue-text-colour'>React</span>, <span className='blue-text-colour'>React Redux</span>, <span className='blue-text-colour'>Styled-Components</span>, <span className='blue-text-colour'>React-Hooks</span>, <span className='blue-text-colour'>React-Router-Dom</span></p>
        </span>
        <p>AnnaBiz is a web application built with 
          React.js and React Bootstrap that serves an e-commerce 
          platform for users to purchase items.
        </p>
        <p>This was a Course Assignment we got 
          during my education at Noroff. 
          This project is also my first project using React!</p>
        <ProjectLinks className='d-flex'>
            <a href='https://annabiz.netlify.app/' target='_blank' rel='noopener noreferrer'><h5>Live</h5></a>
            <a href='https://github.com/AnnaHelene01/OnlineShop-CA' target='_blank' rel='noopener noreferrer'><h5>Repo</h5></a>
        </ProjectLinks>
      </TextContainer>
    </CardContainer>

    <CardContainer>
      <ImageContainer>
        <img src={tømdødsbo} alt="Tøm Dødsbo project" />
      </ImageContainer>
      <TextContainer>
        <h4>TØM DØDSBO</h4>
        <span className='d-flex mt-3'>
           <p>Technologies Used: <span className='blue-text-colour'>Wordpress</span>, <span className='blue-text-colour'>WPForm</span>, <span className='blue-text-colour'>HTML</span>, <span className='blue-text-colour'>CSS</span>, <span className='blue-text-colour'>Figma</span></p>
        </span>
        <p>Tøm Dødsbo is a new company that contacted me in need of a website. 
          They wanted a static, simple page that presented their goals and service
        </p>
        <p>I designed a page and first coded it with HTML and CSS. 
          When the client was satisfied with the result, 
          I constructed the page in WordPress. 
          Downloaded a WPForm plugin there to have 
          the contact form sent directly to the company’s email. 
          This was my first programming job and an extremely 
          fun and educational process.
        </p>
        <ProjectLinks className='d-flex'>
            <a href='https://www.xn--tmddsbo-q1ac.no/' target='_blank' rel='noopener noreferrer'><h5>tømdødsbo.no</h5></a>
        </ProjectLinks>
      </TextContainer>
    </CardContainer>

     <CardContainer>
      <ImageContainer>
        <img src={semester2} alt="Semester 2 project" />
      </ImageContainer>
      <TextContainer>
        <h4>Semester Project 2</h4>
        <span className='d-flex mt-3'>
           <p>Technologies Used: <span className='blue-text-colour'>HTML</span>, <span className='blue-text-colour'>CSS</span>, <span className='blue-text-colour'>JavaScript</span>, <span className='blue-text-colour'>REST API</span> </p>
        </span>
        <p>World Wide Shop is an auction webpage, using a CSS Framework, and Noroff´s API to 
          create different required user stories. 
          Some of them where to create a user, log in, log out, logged in user 
          recieves 1000 credits to use, create auction, delete 
          and update auction and submit a bid on auctions using your credits.
        </p>
        <p>This was my third of 4 exams during my education at Noroff. The grade i got was an A!</p>
        <ProjectLinks className='d-flex'>
            <a href='https://world-wide-shop.netlify.app/' target='_blank' rel='noopener noreferrer'><h5>Live</h5></a>
            <a href='https://github.com/AnnaHelene01/SemesterProject2' target='_blank' rel='noopener noreferrer'><h5>Repo</h5></a>
        </ProjectLinks>
      </TextContainer>
    </CardContainer>
    </>
  )
};

export default Projects;
