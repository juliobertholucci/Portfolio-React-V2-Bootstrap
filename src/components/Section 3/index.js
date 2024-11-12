import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import SkillCardsMobile from '../SkillCardsMobile';
import SkillCardsDesktop from '../SkillCardsDesktop';
const Section = styled.section`
    max-width:100%;
    height:100vh;
    background-color:#000;
    background-position: bottom;
    padding:0% 5% 0% 5%;
`
function Section3 (){
    return(
        <Section>
                <SkillCardsDesktop/>
                <SkillCardsMobile/>
        </Section>
    );
}
export default Section3;