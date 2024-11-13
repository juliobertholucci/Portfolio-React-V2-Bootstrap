import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const Section = styled.section`
    max-width:100%;
    height:100vh;
    background-color:#000;
    background-position: bottom;
    //padding:0% 5% 0% 5%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 1000px) {
        height:50vh;
    }
`
const Video = styled.iframe`
    width:100%;
    height:75%;
    box-shadow: 0 0 10px rgba(50, 129, 255, 1);
    @media (max-width: 1000px) {
        width:100%;
        height:90%;
    }
`
function Section4(){
    return(
        <Section>
            <Video src="https://www.youtube.com/embed/tgbNymZ7vqY" controls>
            </Video>
        </Section>
    );
}
export default Section4;