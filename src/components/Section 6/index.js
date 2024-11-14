import React from 'react';
import styled from 'styled-components';
import Section6Background from '../../images/backgroundSection6.png';
import Section6BackgroundMobile from '../../images/BannerSection6Mobile.png'
import {Row, Col} from 'react-bootstrap';
import linkedin from '../../images/linkedin.png';
import behance from '../../images/behance.png';
import github from '../../images/github.png';
import workana from '../../images/workana.png';
const Section = styled.section`
    max-width: 100%;
    height: 100vh;
    background-image:url("${Section6Background}");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: bottom;
    padding: 0% 5% 0% 5%;
    display: grid; /* Define a Section como um grid */
    grid-template-rows: auto 1fr auto; /* Divide a Section em 3 linhas */
    align-items: center; /* Centraliza verticalmente */
    @media (max-width: 1000px) {
        height: 100vh;
        background-image:url("${Section6BackgroundMobile}");
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: bottom;
    }
`;
const ContainerTitle = styled.div`
    height:12vh;
    background-color:#000;
    width:75%;
    border-radius:0px 0px 30px 30px;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    font-family: "Tenor Sans", sans-serif;
    text-transform:uppercase;
`
const ContainerContacts = styled(Row)`
    width:75%;
    height:70vh;
    margin:0 auto;
    display:flex;
    align-content:center; 
    @media (max-width: 1000px) {
        height: 100vh;
    }
`
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

function Section6(){
    return(
        <Section>
            <ContainerTitle>
                <h1>Contato & Contratar</h1>
            </ContainerTitle>
            <ContainerContacts>
                <Col md='6'>
                    <Contact href="https://www.linkedin.com/in/juliobertholucci/" target='_blank'> 
                        <IconBackground className='w-25'><Image src={linkedin}/></IconBackground>
                        <Row className='w-100 align-content-center'>
                            <SkillLevel md='12' className='text-center'>Acesse meu LinkedIn</SkillLevel>
                        </Row>
                    </Contact>
                    <Contact href="https://www.workana.com/freelancer/84bb3cd92cb5dd9a82b3d76d59925be7" target='_blank'>
                        <IconBackground className='w-25'><Image src={workana}/></IconBackground>
                        <Row className='w-100 align-content-center'>
                            <SkillLevel md='12' className='text-center'>Acesse meu Workana</SkillLevel>
                        </Row>
                    </Contact>
                </Col>
                <Col md='6'>
                    <Contact href="https://github.com/juliobertholucci" target='_blank'> 
                        <IconBackground className='w-25'><Image src={github}/></IconBackground>
                        <Row className='w-100 align-content-center'>
                            <SkillLevel md='12' className='text-center'>Acesse meu GitHub</SkillLevel>
                        </Row>
                    </Contact>
                    <Contact href="https://www.behance.net/juliobertholucci" target='_blank'>
                        <IconBackground className='w-25'><Image src={behance}/></IconBackground>
                        <Row className='w-100 align-content-center'>
                            <SkillLevel md='12' className='text-center'>Acesse meu Behance</SkillLevel>
                        </Row>
                    </Contact>
                </Col>
            </ContainerContacts>
        </Section>
    );
}
export default Section6;