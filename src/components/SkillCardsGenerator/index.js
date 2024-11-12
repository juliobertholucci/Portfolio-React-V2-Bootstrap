import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {keyframes} from 'styled-components';
import {Row, Col} from 'react-bootstrap';
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
    animation: ${rotateShadow} 1.5s linear infinite;
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
export default SkillContent;
