import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Section1BackgroundDesktop from '../../images/Section1-Background-Desktop.png';
import {Row, Col} from 'react-bootstrap';
const Section = styled.section`
    max-width:100%;
    height:95vh;
    background-image:url("${Section1BackgroundDesktop}");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: bottom;
    margin-top:-2em;
    padding:0% 5% 0% 5%;
`
const RightSideCol = styled(Col)`
    height:90vh;
`
const Header = styled.h1`
    font-size: ${props => props.fontSize}px;
    color:#fff;
    font-family: "Tenor Sans", sans-serif;
`
const SubHeader = styled.h3`
    font-size: ${props => props.fontSize}px;
    color:#fff;
    font-family: "Tilt Neon", sans-serif;
    margin-top:1em;
`
function Section1 (){
    return (
        <Section>
             <Row className='w-100 '> 
                <Col md="6"></Col>
                <RightSideCol className='align-content-center justify-content-center text-center' md="6">
                    <Header fontSize ={55}>
                        TECNOLOGIA, DESIGN & ASSERTIVIDADE
                    </Header>
                    <SubHeader fontSize={20}>
                        Conheça sobre meu trabalho,<br/> minha história profissional e como podemos criar juntos!
                    </SubHeader>
                </RightSideCol>
             </Row>
        </Section>
    );
}

export default Section1;