import React from 'react';
import { Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import { CarouselItemDesktop } from '../CarouselItemGen';
import { BrowserView } from 'react-device-detect';
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

const CustomCarousel = styled(Carousel)`
  .carousel-control-next,
  .carousel-control-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
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

function CarouselDesktop (){
    return(
        <BrowserView>
            <CustomCarousel interval={null} controls={true} indicators={true}>
              <Carousel.Item>
                <CarouselItemDesktop imgSrc1={image1} imgSrc2={image2}/>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselItemDesktop imgSrc1={image3} imgSrc2={image4}/>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselItemDesktop imgSrc1={image5} imgSrc2={image6}/>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselItemDesktop imgSrc1={image7} imgSrc2={image8}/>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselItemDesktop imgSrc1={image9} imgSrc2={image10}/>
              </Carousel.Item>
            </CustomCarousel>
        </BrowserView>
    );
}
export default CarouselDesktop;