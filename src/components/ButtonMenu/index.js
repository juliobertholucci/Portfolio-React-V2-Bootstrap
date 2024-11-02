import styled from 'styled-components';
import Nav  from 'react-bootstrap/Nav';
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
    @media (max-width: 1000px) {
      width:100%;
      text-align:center;
      margin-left:4em;
    }
`
function ButtonMenu(){
    return (
        <ButtonNav href="#hiring">CONTRATE</ButtonNav>
    );
}
export default ButtonMenu;
