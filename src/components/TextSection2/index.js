import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const Text = styled.p`
    color:#fff;
    font-size:22px;
    text-align:center;
    @media (max-width: 1000px) {
        background-size:auto 100%;
        text-align:justify;
    }
`
function TextSection2(){
    return(
        <Text className='text-center'>"Iniciei em tecnologia pela ETEC Dr. Carolino da Motta e Silva, aos 15 anos, aprendendo lógica de programação, desenvolvimento web e design por 3 anos consecutivos. Avançando para a faculdade em 2022, ingressei na PUC Minas no curso de Ciência da Computação permanecendo por 1 ano, realizando projeto de iniciação científica. Durante o período de 2022 a 2024 criei agências de makreting, trabalhei como autônomo em desenvolvimento web e marketing. Hoje conto com mais de 5 anos de experiência e com 21 anos de idade..."</Text>
    );
}
export default TextSection2;