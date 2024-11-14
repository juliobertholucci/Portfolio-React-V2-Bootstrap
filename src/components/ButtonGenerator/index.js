import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
const ButtonStyle = styled(Button)`
  width: 20%;
  margin:0 auto;
  background: linear-gradient(to right, #3281FF, #1E4D99);
  border:none;
  border-radius:30px;
  font-size:20px;
  font-family:"Tilt Neon", sans-serif;
  &:hover{
      background: linear-gradient(45deg, #1E4D99, #3281FF);
      color:#fff;
    }
`;
function ButtonRedirect ({link, context}){
    return(
      <ButtonStyle href={link}>{context}</ButtonStyle>
    );
}
export default ButtonRedirect;