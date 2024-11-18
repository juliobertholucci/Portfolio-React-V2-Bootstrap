import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import logotipo from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
const LogoNav = styled(Navbar.Brand)`
    width:25%;

    @media (max-width: 1000px) {
      width:40%;
    }
`
function LogoMenu (){
    return(
        <LogoNav href="#top"><img className='w-100' src={logotipo}/></LogoNav>
    );
}

export default LogoMenu;
