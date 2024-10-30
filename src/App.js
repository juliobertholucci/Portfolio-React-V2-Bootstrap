import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import foto from '../src/images/Group 1.png';
import styled from 'styled-components';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


function App() {
  return (
    <>
   <Row className='w-75 m-auto bg-success'>
     <Col md="3" sm="6" className='bg-danger'>CONTENT</Col>
     <Col md="3" sm="6" className='bg-primary'>CONTENT</Col>
     <Col md="3" sm="6" className='bg-danger'>CONTENT</Col>
     <Col md="3" sm="6" className='bg-primary'>CONTENT</Col>
   </Row>

   <Row className='w-75 m-auto bg-success'>
     <Col md="3" sm="6" className='bg-danger'>CONTENT</Col>
     <Col md="3" sm="6" className='bg-primary'>CONTENT</Col>
     <Col md="3" sm="6" className='bg-danger'>CONTENT</Col>
     <Col md="3" sm="6" className='bg-primary'>CONTENT</Col>
   </Row>
   

   </>
   
   
  );
}

export default App;
