import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import htmlIcon from '../../images/html.png';
import reactIcon from '../../images/react.png';
import photoshopIcon from '../../images/photoshop.png';
import phpIcon from '../../images/php.png';
import mysqlIcon from '../../images/mysql.png';
import jsIcon from '../../images/js.png';
import figmaIcon from '../../images/figma.png';
import csharpIcon from '../../images/csharp.png';
import css3Icon from '../../images/css3.png';
import bootstrapIcon from '../../images/bootstrap.png';
import aspxIcon from '../../images/aspx.png';
const Section = styled.section`
    max-width:100%;
    height:60vh;
    background-color:#000;
    background-position: bottom;
    padding:0% 5% 0% 5%;
`
const IconBackground = styled.div`
    background-color:#fff;
    border-radius:50%;
    min-width:80px;
    height:80px;
    text-align:center;
    align-content:center;
    margin-top:-1.6em;
    margin-left:-1.3em;
`
const Image = styled.img`
    width:50px;
    height:50px;
`
const Container = styled(Col)`
    background-color:#2E77EB;
    display:flex;
    margin:10px;
    padding:10px;
    border-radius:40px 20px 20px 40px;
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
            <Row>
                <SkillContent title='HTML5' level="Avançado" imgSrc={htmlIcon}/>
                <SkillContent title='CSS3' level="Avançado" imgSrc={css3Icon}/>
                <SkillContent title='JavaScript' level="Avançado" imgSrc={jsIcon}/>
                <SkillContent title='Bootstrap' level="Avançado" imgSrc={bootstrapIcon}/>
            </Row>
            <Row className='h-25'></Row>
            <Row className='h-25'></Row>
        </Section>
    );
}
export default Section3;