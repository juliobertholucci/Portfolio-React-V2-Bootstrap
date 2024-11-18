import React from 'react';
import styled from 'styled-components';
import CarouselDesktop from '../PortfolioCarouselDesktop';
import CarouselMobile from '../PortfolioCarouselMobile';
import ButtonRedirect from '../ButtonGenerator';
const Section = styled.section`
  max-width: 100%;
  height: 100vh;
  background-color: #000;
  background-position: bottom;
  padding: 0% 5% 5% 5%;
  display: grid; /* Define a Section como um grid */
  grid-template-rows: auto 1fr auto; /* Divide a Section em 3 linhas */
  align-items: center; /* Centraliza verticalmente */
  @media (max-width: 1000px) {
    height: 50vh;
  }
`;
const Text = styled.h1`
  font-size: 3rem;
  font-family: "Tenor Sans", sans-serif;
  color: #fff;
  text-align:center;

  @media (max-width: 1000px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
function Section5() {
  return (
    <Section >
      <Text id='portfolio'>PORTFÓLIO</Text>
      <div> {/* Container para o carousel */}
        <CarouselDesktop />
        <CarouselMobile />
      </div>
      <ButtonRedirect link='https://www.behance.net/juliobertholucci' context='Veja Mais'/>
    </Section>
  );
}
export default Section5;