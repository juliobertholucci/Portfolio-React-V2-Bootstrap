import React from 'react';
import { Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import { CarouselItemMobile } from '../CarouselItemGen';
import { MobileView } from 'react-device-detect';
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
function CarouselMobile(){
    return(
        <MobileView>
              <CustomCarousel interval={null} controls={true} indicators={true}>
                <Carousel.Item>
                  <CarouselItemMobile imgSrc={image1}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image2}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image3}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image4}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image5}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image6}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image7}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image8}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image9}/>
                </Carousel.Item><Carousel.Item>
                  <CarouselItemMobile imgSrc={image10}/>
                </Carousel.Item>
              </CustomCarousel>
        </MobileView>
    );
}
export default CarouselMobile;