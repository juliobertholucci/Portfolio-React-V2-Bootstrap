import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logotipo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareBehance } from '@fortawesome/free-brands-svg-icons';
const MenuContainer = styled(Navbar)`
    background-color:#000;
    min-height:12vh;
    border-radius: 0px 0px 30px 30px;
    z-index:1;
`
const ButtonNav = styled(Nav.Link)`
    background: linear-gradient(to right, #3281FF, #1E4D99);
    color:#fff;
    border-radius:30px;
    font-size:20px;
    font-family:"Tilt Neon", sans-serif;
    margin-right: 2em;
    &:hover{
        background: linear-gradient(45deg, #1E4D99, #3281FF);
        color:#fff;
    }
    @media (max-width: 800px) {
      width:100%;
      text-align:center;
      margin:1em 0em 1em 0em;
    }
`
const ItemNav = styled(Nav.Link)`
    font-size:20px;
    font-family:"Tilt Neon", sans-serif;
    margin-right: 2em;
    border-radius:30px;
    color: #fff;
    &:hover{
        transition:0.5s;
        background-color: #3281FF;
        color:#fff;
    }
    @media (max-width: 800px) {
      width:100%;
      text-align:center;
    }
`
const IconNav = styled(FontAwesomeIcon)`
    font-size:40px;
    margin:6px;
    color: #3281FF;
    &:hover{
      color:#1E4D99;
      cursor:pointer;
      transition:0.5s;
      box-shadow: rgba(50, 129, 255, 0.4) 5px 5px, rgba(50, 129, 255, 0.3) 10px 10px, rgba(50, 129, 255, 0.2) 15px 15px, rgba(50, 129, 255, 0.1) 20px 20px, rgba(50, 129, 255, 0.05) 25px 25px;
    }

    @media (max-width: 800px) {
      display:flex;
      float:left;
    }
`
const LogoNav = styled(Navbar.Brand)`
    width:25%;

    @media (max-width: 800px) {
      width:50%;
    }
`

function Header() {
return(
  <header>
    <MenuContainer collapseOnSelect expand="lg" >
      <Container>
        <LogoNav href="#home"><img className='w-100' src={logotipo}/></LogoNav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto menuFontStyle">
            <ItemNav href="#features">SOBRE</ItemNav>
            <ItemNav href="#pricing">HABILIDADES</ItemNav>
            <ItemNav href="#pricing">PORTFÓLIO</ItemNav>
            <ButtonNav href="#pricing">CONTRATE</ButtonNav>
          </Nav>
          <Nav>
          <Nav.Item><IconNav icon={faSquareGithub}/></Nav.Item>
          <Nav.Item><IconNav icon={faSquareBehance}/></Nav.Item>
          <Nav.Item><IconNav icon={faLinkedin}/></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </MenuContainer>
  </header>

);
}

export default Header;