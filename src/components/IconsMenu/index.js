import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Nav  from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
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
    function IconsMenu(){
        return(
            <Nav>
                <MobileView>
                    <Row className='w-50 m-auto'>
                        <Col><IconNav icon={faSquareGithub}/></Col>
                        <Col><IconNav icon={faSquareBehance}/></Col>
                        <Col><IconNav icon={faLinkedin}/></Col>
                    </Row>
                </MobileView>
                <Nav.Item><IconNav icon={faSquareGithub}/></Nav.Item>
                <Nav.Item><IconNav icon={faSquareBehance}/></Nav.Item>
                <Nav.Item><IconNav icon={faLinkedin}/></Nav.Item>
            </Nav>
        );
    }
export default IconsMenu;