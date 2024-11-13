import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import image1 from '../../images/cg.png';
import image2 from '../../images/lider.png';
import image3 from '../../images/franco.png';
import image4 from '../../images/trem.png';
import image5 from '../../images/result.png';
import image6 from '../../images/sudeste.png';
import image7 from '../../images/suportes.png';
import image8 from '../../images/qualisol.png';
import image9 from '../../images/pedro.png';
import image10 from '../../images/elite.png';
const Section = styled.section`
    max-width:100%;
    height:80vh;
    background-color:#000;
    background-position: bottom;
    padding:0% 5% 0% 5%;
    @media (max-width: 1000px) {
        height:50vh;
    }
`
const CustomCarousel = styled(Carousel)`
  .carousel-control-next,
  .carousel-control-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: #000;
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin-right: 10px;
  }
  .carousel-indicators{
    display:none;
  }
  .carousel-control-prev {
    left: 10px;
  }
`;
const Text = styled.h1`
  font-size:3rem;
  font-family: "Tenor Sans", sans-serif;
  color:#fff;
  margin-bottom:6rem;
  @media (max-width: 1000px) {
    font-size:1.5rem;
  }
`
const Image = styled.img`
  width:100%;
  height:100%;
`

    function MyCarousel() {
        return (
          <Section className='justify-content-center align-items-center d-flex'> 
            <BrowserView>
              <Text className='text-center'>PORTFÓLIO</Text>
              <CustomCarousel interval={null} controls={true} indicators={true}>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <Image src={image1} alt="Slide" />
                    </Col>
                    <Col md={6}>
                      <Image src={image2} alt="Slide" />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <Image src={image3} alt="Slide" />
                    </Col>
                    <Col md={6}>
                      <Image src={image4} alt="Slide" />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <Image src={image5} alt="Slide" />
                    </Col>
                    <Col md={6}>
                      <Image src={image6} alt="Slide" />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <Image src={image7} alt="Slide" />
                    </Col>
                    <Col md={6}>
                      <Image src={image8} alt="Slide" />
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <Image src={image9} alt="Slide" />
                    </Col>
                    <Col md={6}>
                      <Image src={image10} alt="Slide" />
                    </Col>
                  </Row>
                </Carousel.Item>
              </CustomCarousel>
            </BrowserView>
            <MobileView>
              <CustomCarousel interval={null} controls={true} indicators={true}>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image1} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image2} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image3} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image4} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image5} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image6} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image7} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image8} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image9} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Col md={12}>
                        <Image src={image10} alt="Slide" />
                      </Col>
                  </Carousel.Item>
                </CustomCarousel>
            </MobileView>
          </Section>
        );
      }
export default MyCarousel;