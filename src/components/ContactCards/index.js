import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import linkedin from '../../images/linkedin.png';
import behance from '../../images/behance.png';
import github from '../../images/github.png';
import workana from '../../images/workana.png';
import ContactCards from '../ContactCardsGen';
const ContainerContacts = styled(Row)`
    width:75%;
    height:70vh;
    margin:0 auto;
    display:flex;
    align-content:center; 
    @media (max-width: 1000px) {
        height: 100vh;
    }
`
function ContactCard(){
    return(
        <ContainerContacts>
                <Col md='6'>
                    <ContactCards link='https://www.linkedin.com/in/juliobertholucci/' imgSrc={linkedin} text='Acesse meu LinkedIn'/>
                    <ContactCards link='https://www.workana.com/freelancer/84bb3cd92cb5dd9a82b3d76d59925be7' imgSrc={workana} text='Acesse meu Workana'/>
                </Col>
                <Col md='6'>
                    <ContactCards link='https://github.com/juliobertholucci' imgSrc={github} text='Acesse meu GitHub'/>
                    <ContactCards link='https://www.behance.net/juliobertholucci' imgSrc={behance} text='Acesse meu Behance'/>
                </Col>
        </ContainerContacts>
    );
}
export default ContactCard;