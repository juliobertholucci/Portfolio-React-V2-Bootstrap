import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Nav  from 'react-bootstrap/Nav';

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
    @media (max-width: 1000px) {
      width:100%;
      text-align:center;
      margin-top:1em;
    }
`
function OptionsMenu(){
    return (
        <>
            <ItemNav href="#features">SOBRE</ItemNav>
            <ItemNav href="#pricing">HABILIDADES</ItemNav>
            <ItemNav href="#pricing">PORTFÓLIO</ItemNav>
        </>
    );
}

export default OptionsMenu;