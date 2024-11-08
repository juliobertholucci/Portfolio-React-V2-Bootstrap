import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Section1BackgroundDesktop from '../../images/Section1-Background-Desktop.png';
import Section1BackgroundMobile from '../../images/Section1-Background-Mobile.png';
import {Row, Col} from 'react-bootstrap';
import TextSection1 from '../TextSection1';
const Section = styled.section`
    max-width:100%;
    height:95vh;
    background-image:url("${Section1BackgroundDesktop}");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: bottom;
    margin-top:-2em;
    padding:0% 5% 0% 5%;

    @media (max-width: 1000px) {
        background-image:url("${Section1BackgroundMobile}");
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: bottom;
    }
`
function Section1 (){
    return (
        <Section>
             <Row className='w-100 '> 
                <Col lg="6"></Col>
                <TextSection1/>
             </Row>
        </Section>
    );
}

export default Section1;