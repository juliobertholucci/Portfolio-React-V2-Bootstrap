import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Nav  from 'react-bootstrap/Nav';

const ItemNav = styled(Nav.Link)`
    font-size:20px;
    font-family:"Tilt Neon", sans-serif;
    margin-right: 2em;
    border-radius:30px;
    background-color:#000;
    text-decoration:none;
    color: #fff;
    &:hover{
        transition:0.5s;
        background-color: #3281FF;
        color:#fff;
    }
    &:active{
        background-color: #3281FF !important;
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
            <ItemNav active={false} href="/#sobre">SOBRE</ItemNav>
            <ItemNav active={false} href="/#habilidades">HABILIDADES</ItemNav>
            <ItemNav active={false} href="/#portfolio">PORTFÓLIO</ItemNav>
        </>
    );
}

export default OptionsMenu;