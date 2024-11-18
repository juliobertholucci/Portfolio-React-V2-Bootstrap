import React from 'react';
import TextSection2 from '../TextSection2';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Section2Background from '../../images/Section2-Background.png';
const Section = styled.section`
    max-width:100%;
    height:70vh;
    background-image:url("${Section2Background}");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color:#000;
    background-position: bottom;
    padding:5% 5% 5% 5%;
    display:flex;
    align-items:center;

    @media (max-width: 1000px) {
        background-size:auto 100%;
    }
`
function Section2(){
    return(
        <Section id='sobre'>
            <TextSection2/>
        </Section>
    );
}
export default Section2;