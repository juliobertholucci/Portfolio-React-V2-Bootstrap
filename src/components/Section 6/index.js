import React from 'react';
import styled from 'styled-components';
import Section6Background from '../../images/backgroundSection6.png';
import Section6BackgroundMobile from '../../images/BannerSection6Mobile.png'
import ContactCard from '../ContactCards';

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

function Section6(){
    return(
        <Section>
            <ContainerTitle>
                <h1>Contato & Contratar</h1>
            </ContainerTitle>
            <ContactCard/>
        </Section>
    );
}
export default Section6;