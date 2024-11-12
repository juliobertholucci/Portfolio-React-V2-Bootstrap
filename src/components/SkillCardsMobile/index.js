import React from 'react';
import {Carousel} from 'react-bootstrap';
import { MobileView} from 'react-device-detect';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillContent from '../SkillCardsGenerator';
import htmlIcon from '../../images/html.png';
import reactIcon from '../../images/react.png';
import wordpressIcon from '../../images/wordpress.png';
import photoshopIcon from '../../images/photoshop.png';
import phpIcon from '../../images/php.png';
import mysqlIcon from '../../images/mysql.png';
import jsIcon from '../../images/js.png';
import figmaIcon from '../../images/figma.png';
import csharpIcon from '../../images/csharp.png';
import css3Icon from '../../images/css3.png';
import bootstrapIcon from '../../images/bootstrap.png';
import aspxIcon from '../../images/aspx.png';
function SkillCardsMobile(){
        return(
            <MobileView>
                    <Carousel>
                        <Carousel.Item className='p-5 pt-3'>
                            <SkillContent title='HTML5' level="Avançado" load='lazy' imgSrc={htmlIcon}/>
                            <SkillContent title='CSS3' level="Avançado" load='lazy' imgSrc={css3Icon}/>
                            <SkillContent title='JavaScript' level="Avançado" load='lazy' imgSrc={jsIcon}/>
                        </Carousel.Item>
                        <Carousel.Item className='p-5 pt-3'>
                                <SkillContent title='Bootstrap' level="Avançado" load='lazy' imgSrc={bootstrapIcon}/>
                                <SkillContent title='WordPress' level="Avançado" load='lazy' imgSrc={wordpressIcon}/>
                                <SkillContent title='React' level="Intermediário" load='lazy' imgSrc={reactIcon}/>
                        </Carousel.Item>
                        <Carousel.Item className='p-5 pt-3'>
                                <SkillContent title='MySQL' level="Intermediário" load='lazy' imgSrc={mysqlIcon}/>
                                <SkillContent title='PHP' level="Intermediário" load='lazy' imgSrc={phpIcon}/>
                                <SkillContent title='C#' level="Básico" load='lazy' imgSrc={csharpIcon}/>
                        </Carousel.Item>
                        <Carousel.Item className='p-5 pt-3'>
                                <SkillContent title='Asp.Net' level="Básico" load='lazy' imgSrc={aspxIcon}/>
                                <SkillContent title='Photoshop' level="Avançado" load='lazy' imgSrc={photoshopIcon}/>
                                <SkillContent title='Figma' level="Avançado" load='lazy' imgSrc={figmaIcon}/>
                        </Carousel.Item>
                    </Carousel>
            </MobileView>
        );
}
export default SkillCardsMobile;