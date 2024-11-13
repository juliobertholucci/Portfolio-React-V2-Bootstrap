import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Section1 from './components/Section 1';
import Section2 from './components/Section 2';
import Section3 from './components/Section 3';
import Section4 from './components/Section 4';
import MyCarousel from './components/Section 5';
import styled from 'styled-components';
//import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const AppContainer = styled.div`
  width:100%;
  height:auto;
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <MyCarousel/>
    </AppContainer>
  );
}

export default App;
