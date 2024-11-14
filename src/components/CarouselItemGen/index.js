import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
const Image = styled.img`
  width:100%;
  height:100%;
  @media (max-width: 1000px) {
    height:80%;
    width:100%;
  }
`
function CarouselItemDesktop({imgSrc1, imgSrc2}){
    return (
        <Row>
          <Col md={6}>
            <Image src={imgSrc1} alt="Slide" />
          </Col>
          <Col md={6}>
            <Image src={imgSrc2} alt="Slide" />
          </Col>
        </Row>
    );
}
function CarouselItemMobile({imgSrc}){
    return (
        <Col md={12}>
          <Image src={imgSrc} alt="Slide" />
        </Col>
    );
}

export {CarouselItemDesktop, CarouselItemMobile}