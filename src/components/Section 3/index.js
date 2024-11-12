import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {keyframes} from 'styled-components';
import {Row, Col, Carousel} from 'react-bootstrap';
import htmlIcon from '../../images/html.png';
import reactIcon from '../../images/react.png';
import wordpressIcon from '../../images/wordpress.png';
import photoshopIcon from '../../images/photoshop.png';
import phpIcon from '../../images/php.png';
import mysqlIcon from '../../images/mysql.png';
import jsIcon from '../../images/js.png';
import figmaIcon from '../../images/figma.png';
import csharpIcon from '../../images/csharp.png';
import css3Icon from '../../images/css3.png';
import bootstrapIcon from '../../images/bootstrap.png';
import aspxIcon from '../../images/aspx.png';
import { MobileView, BrowserView } from 'react-device-detect';
const Section = styled.section`
    max-width:100%;
    height:100vh;
    background-color:#000;
    background-position: bottom;
    padding:0% 5% 0% 5%;
    
`
const IconBackground = styled.div`
    background-color:#fff;
    border-radius:50%;
    width:90px !important;
    height:80px !important;
    text-align:center;
    align-content:center;
    margin-top:-1.6em;
    margin-left:-1.3em;
`
const Image = styled.img`
    width:50px !important;
    height: 50px !important;;
`
const rotateShadow = keyframes`
    0% {
            box-shadow: 0 0 10px rgba(50, 129, 255, 0.5); /* Sombra inicial */
    }
    25% {
            box-shadow: 10px 0 10px rgba(50, 129, 255, 0.5); /* Sombra na direita */
    }
    50% {
            box-shadow: 0 10px 10px rgba(50, 129, 255, 0.5); /* Sombra embaixo */
    }
    75% {
            box-shadow: -10px 0 10px rgba(50, 129, 255, 0.5); /* Sombra na esquerda */
    }
    100% {
            box-shadow: 0 0 10px rgba(50, 129, 255, 0.5); /* Sombra inicial */
    }
`
const Container = styled(Col)`
    background-color:#000;
    border:3px solid #3281FF;
    display:flex;
    margin:10px;
    padding:10px;
    border-radius:40px 20px 20px 40px;
    animation: ${rotateShadow} 2s linear infinite;
    @media (max-width: 1000px) {
      margin-bottom:3rem;
    }
`

const SkillTitle = styled(Col)`
    font-family: "Tenor Sans", sans-serif;
    font-size:1.5rem;
    color:#fff;
`;

const SkillLevel = styled(Col)`
  font-size: 1rem;
  color:#fff;
`;
function SkillContent({title, level, imgSrc}){
    return(
        <Container>
            <IconBackground className='w-25'><Image src={imgSrc}/></IconBackground>
            <Row className='w-100 align-content-center'>
                <SkillTitle md='12' className='text-center'>{title}</SkillTitle>
                <SkillLevel md='12' className='text-center'>{level}</SkillLevel>
            </Row>
        </Container>
    );
}

function Section3 (){
    return(
        <Section>
            <BrowserView>
                    <Row>
                        <SkillContent title='HTML5' level="Avançado" imgSrc={htmlIcon}/>
                        <SkillContent title='CSS3' level="Avançado" imgSrc={css3Icon}/>
                        <SkillContent title='JavaScript' level="Avançado" imgSrc={jsIcon}/>
                        <SkillContent title='Bootstrap' level="Avançado" imgSrc={bootstrapIcon}/>
                    </Row>
                    <Row className='pb-4 pt-4'>
                        <SkillContent title='WordPress' level="Avançado" imgSrc={wordpressIcon}/>
                        <SkillContent title='React' level="Intermediário" imgSrc={reactIcon}/>
                        <SkillContent title='MySQL' level="Intermediário" imgSrc={mysqlIcon}/>
                        <SkillContent title='PHP' level="Intermediário" imgSrc={phpIcon}/>
                    </Row>
                    <Row>
                        <SkillContent title='C#' level="Básico" imgSrc={csharpIcon}/>
                        <SkillContent title='Asp.Net' level="Básico" imgSrc={aspxIcon}/>
                        <SkillContent title='Photoshop' level="Avançado" imgSrc={photoshopIcon}/>
                        <SkillContent title='Figma' level="Avançado" imgSrc={figmaIcon}/>
                    </Row>
                </BrowserView>

                <MobileView>
                    <Carousel>
                        <Carousel.Item className='p-5 pt-3'>
                            <SkillContent title='HTML5' level="Avançado" imgSrc={htmlIcon}/>
                            <SkillContent title='CSS3' level="Avançado" imgSrc={css3Icon}/>
                            <SkillContent title='JavaScript' level="Avançado" imgSrc={jsIcon}/>
                        </Carousel.Item>
                        <Carousel.Item className='p-5 pt-3'>
                                <SkillContent title='Bootstrap' level="Avançado" imgSrc={bootstrapIcon}/>
                                <SkillContent title='WordPress' level="Avançado" imgSrc={wordpressIcon}/>
                                <SkillContent title='React' level="Intermediário" imgSrc={reactIcon}/>
                        </Carousel.Item>
                        <Carousel.Item className='p-5 pt-3'>
                                <SkillContent title='MySQL' level="Intermediário" imgSrc={mysqlIcon}/>
                                <SkillContent title='PHP' level="Intermediário" imgSrc={phpIcon}/>
                                <SkillContent title='C#' level="Básico" imgSrc={csharpIcon}/>
                        </Carousel.Item>
                        <Carousel.Item className='p-5 pt-3'>
                                <SkillContent title='Asp.Net' level="Básico" imgSrc={aspxIcon}/>
                                <SkillContent title='Photoshop' level="Avançado" imgSrc={photoshopIcon}/>
                                <SkillContent title='Figma' level="Avançado" imgSrc={figmaIcon}/>
                        </Carousel.Item>
                    </Carousel>
                </MobileView>
        </Section>
    );
}
export default Section3;