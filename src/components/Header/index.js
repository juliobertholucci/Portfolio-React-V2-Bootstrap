import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import ButtonMenu from '../ButtonMenu';
import LogoMenu from '../LogoMenu';
import OptionsMenu from '../OptionsMenu';
import IconsMenu from '../IconsMenu';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const MenuContainer = styled(Navbar)`
    background-color:#000;
    min-height:12vh;
    border-radius: 0px 0px 30px 30px;
    z-index:1;
`
const ToggleIconNav = styled(Navbar.Toggle)`
  background: linear-gradient(to right, #3281FF, #1E4D99);
  border-radius:100%;
  font-size:15px;
  padding:10px;
`

function Header() {
return(
  <header>
    <MenuContainer collapseOnSelect expand="lg" >
      <Container>
        <LogoMenu/>
          <MobileView>
              <ButtonMenu className='w-25'>CONTRATE</ButtonMenu>
          </MobileView>
        <ToggleIconNav aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto menuFontStyle">
            <OptionsMenu/>
            <BrowserView>
              <ButtonMenu/>
            </BrowserView>
          </Nav>
          <IconsMenu/>
        </Navbar.Collapse>
      </Container>
    </MenuContainer>
  </header>

 );
}

export default Header;