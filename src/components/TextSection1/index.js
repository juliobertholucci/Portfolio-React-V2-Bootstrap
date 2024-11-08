import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
const Header = styled.h1`
    font-size: 55px;
    color:#fff;
    font-family: "Tenor Sans", sans-serif;
    @media (max-width: 1000px) {
       font-size:30px;
    }
`
const SubHeader = styled.h3`
    font-size: 20px;
    color:#fff;
    font-family: "Tilt Neon", sans-serif;
    margin-top:1em;
    @media (max-width: 1000px) {
       font-size:15px;
    }
`
const RightSideCol = styled(Col)`
    height:90vh;
    justify-content:center;
    align-content:center;
    text-align:center;

    @media (max-width: 1000px) {
        align-content:start;
        padding-top:5em;
    }
`
function TextSection1 (){
    return (
        <RightSideCol lg="6">      
            <Header>
                TECNOLOGIA, DESIGN & ASSERTIVIDADE
            </Header>
            <SubHeader>
                Conheça sobre meu trabalho,<br/> minha história profissional e como podemos criar juntos!
            </SubHeader>
        </RightSideCol>
    );
}

export default TextSection1;