import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
const IconBackground = styled.div`
    background-color:#000;
    z-index:10;
    border-radius:50%;
    width:90px !important;
    height:80px !important;
    text-align:center;
    align-content:center;
    margin-top:0;
    margin-left:0;
`
const Image = styled.img`
    width:100% !important;
    height:100% !important;
    
`
const Contact = styled.a`
    background-color:#000;
    display:flex;
    margin-bottom:3rem;
    padding:0px;
    border-radius:40px 20px 20px 40px;
    text-decoration:none;
    @media (max-width: 1000px) {
      margin-bottom:3rem;
    }
    &:hover{
        background-color:#303030;
        transition:0.5s;
    }
`
const SkillLevel = styled(Col)`
  font-size: 1.5rem;
  color:#fff;
`;
function ContactCards({link, imgSrc, text}){
    return(
        <Contact href={link} target='_blank'> 
            <IconBackground className='w-25'><Image src={imgSrc}/></IconBackground>
            <Row className='w-100 align-content-center'>
                <SkillLevel md='12' className='text-center'>{text}</SkillLevel>
            </Row>
        </Contact>
    );
}
export default ContactCards;