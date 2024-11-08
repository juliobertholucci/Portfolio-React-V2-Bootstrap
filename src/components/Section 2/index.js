import React from 'react';
import TextSection2 from '../TextSection2';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Section2Background from '../../images/Section2-Background.png';
const Section = styled.section`
    max-width:100%;
    height:60vh;
    background-image:url("${Section2Background}");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color:#000;
    background-position: center;
    padding:5% 5% 5% 5%;
    align-content:center;
`
function Section2(){
    return(
        <Section>
            <TextSection2/>
        </Section>
    );
}
export default Section2;