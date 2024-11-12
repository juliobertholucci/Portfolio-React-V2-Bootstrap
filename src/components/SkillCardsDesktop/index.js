import SkillContent from '../SkillCardsGenerator';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserView } from 'react-device-detect';
import {Row} from 'react-bootstrap';
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

function SkillCardsDesktop(){
    return(
        <BrowserView>
            <Row>
                <SkillContent title='HTML5' level="Avançado" load='lazy' imgSrc={htmlIcon}/>
                <SkillContent title='CSS3' level="Avançado" load='lazy' imgSrc={css3Icon}/>
                <SkillContent title='JavaScript' level="Avançado" load='lazy' imgSrc={jsIcon}/>
                <SkillContent title='Bootstrap' level="Avançado" load='lazy' imgSrc={bootstrapIcon}/>
            </Row>
            <Row className='pb-4 pt-4'>
                <SkillContent title='WordPress' level="Avançado" load='lazy' imgSrc={wordpressIcon}/>
                <SkillContent title='React' level="Intermediário" load='lazy' imgSrc={reactIcon}/>
                <SkillContent title='MySQL' level="Intermediário" load='lazy' imgSrc={mysqlIcon}/>
                <SkillContent title='PHP' level="Intermediário" load='lazy' imgSrc={phpIcon}/>
            </Row>
            <Row>
                <SkillContent title='C#' level="Básico" load='lazy' imgSrc={csharpIcon}/>
                <SkillContent title='Asp.Net' level="Básico" load='lazy' imgSrc={aspxIcon}/>
                <SkillContent title='Photoshop' level="Avançado" load='lazy' imgSrc={photoshopIcon}/>
                <SkillContent title='Figma' level="Avançado" load='lazy' imgSrc={figmaIcon}/>
            </Row>
        </BrowserView>
    );
}
export default SkillCardsDesktop;