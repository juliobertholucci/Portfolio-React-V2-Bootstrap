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
    z-index:10;
`
const ToggleIconNav = styled(Navbar.Toggle)`
  background: linear-gradient(to right, #3281FF, #1E4D99);
  border-radius:100%;
  font-size:15px;
  padding:10px;
`

function Header() {
return(
    <MenuContainer sticky="top" collapseOnSelect expand="lg" >
      <Container>
        <LogoMenu/>
          <MobileView>
              <ButtonMenu content='Contrate' className='w-25'/>
          </MobileView>
        <ToggleIconNav aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto menuFontStyle">
            <OptionsMenu/>
            <BrowserView>
              <ButtonMenu link='https://api.whatsapp.com/send?phone=5535998705890&text=Ol%C3%A1%20Julio!%20Visitei%20seu%20portf%C3%B3lio%20e%20me%20interesso%20em%20seus%20servi%C3%A7os.%20Podemos%20falar?' content='CONTRATE'/>
            </BrowserView>
          </Nav>
          <IconsMenu/>
        </Navbar.Collapse>
      </Container>
    </MenuContainer>
 );
}
export default Header;