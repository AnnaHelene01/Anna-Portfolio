import React from 'react'
import { ContactContainer, ContactFlex, ContactLinks, FormContainer, FormInput, RoundedBtn, SkillSquare } from '../../components/styled-components/MainStyles';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [state, handleSubmit] = useForm("mzbqlbdk");

    if (state.succeeded) {
      return <>
        <h1 className='text-center mt-5'>Thanks for reaching out!</h1>;
        <p className='text-center'>I´ll get in touch with you as soon as possible!</p>
        <Link to='/' className='text-decoration-none blue-text-colour'>
            <h4 className='text-center'>Go back!</h4>
        </Link>
      </>

    }
  return (
    <>
     <h1 className='mt-5 text-center'>CONTACT ME</h1>
     <ContactContainer>
        <h4>Get in touch</h4>
        <ContactFlex>
            <ContactLinks>
                <SkillSquare>
                  <AiOutlineMail />
                </SkillSquare>
                <a href="mailto:annahelene2001@gmail.com" className='text-decoration-none'>
                    <p>annahelene2001@gmail.com</p>
                </a>
                <p className='grey-color'>Email me!</p>
            </ContactLinks>
            <ContactLinks>
                <SkillSquare>
                    <AiFillPhone />
                </SkillSquare>
                <a href="tel:+4794037139" className='text-decoration-none'>
                  <p>Telephone</p>
                </a>               
                <p className='grey-color'>Call me!</p>
            </ContactLinks>
        </ContactFlex>
        <h4>Contact Form</h4>
        <FormContainer>
          <form onSubmit={handleSubmit} method="POST">
              <FormInput type='text' placeholder='Name' name='name' />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <FormInput type='email' placeholder='Email' id='email' name='email'/>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <FormInput type='message' placeholder='Message' name='message' />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <div className='text-center mt-4' style={{ backgroundColor: 'white' }}>
                <RoundedBtn type='submit' disabled={state.submitting}>Send</RoundedBtn>
              </div>
          </form>
        </FormContainer>
     
     </ContactContainer> 
    </>
  )
};

export default Contact;
