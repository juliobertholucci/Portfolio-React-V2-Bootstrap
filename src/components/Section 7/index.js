import React from 'react';
import styled from 'styled-components';
import ButtonRedirect from '../ButtonGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
const Section = styled.section`
    max-width: 100%;
    height: 50vh;
    background-color:#000;
    padding: 0% 5% 0% 5%;
    display: grid; /* Define a Section como um grid */
    grid-template-rows: auto; /* Divide a Section em 3 linhas */
    align-items: center; /* Centraliza verticalmente */
    text-align:center;
    @media (max-width: 1000px) {
        height: 50vh;
    }
`;
const Title = styled.h1`
    font-family: "Tenor Sans", sans-serif;
    font-size:2.5rem;
    color:#fff;
`;
const Subtitle = styled.h2`
    font-size: 1.5rem;
    color:#fff;
    margin-bottom:3rem;
    margin-top:3rem;
`;
function Section7(){
    return(
        <Section id='contrate'>
            <div>
                <Title>Interessou em meu Trabalho?</Title>
                <Subtitle>Clique no botão abaixo e vamos conversar!</Subtitle>
                <ButtonRedirect link='https://api.whatsapp.com/send?phone=5535998705890&text=Ol%C3%A1%20Julio!%20Visitei%20seu%20portf%C3%B3lio%20e%20me%20interesso%20em%20seus%20servi%C3%A7os.%20Podemos%20falar?' context='Iniciar Conversa'/>
            </div>
        </Section>
    );
}
export default Section7;