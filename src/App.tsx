import React from 'react';
import styled from 'styled-components';
import SuiteHeader from './components/SuiteHeader';
import Navigation from './components/Navigation';
import Toolbar from './components/Toolbar';
import MainContent from './components/MainContent';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const HeaderSection = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: #f0f0f0;
  z-index: 10;
`;

const ContentSection = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

function PowerPointInterface() {
  return (
    <AppContainer>
      <HeaderSection>
        <SuiteHeader />
        <Navigation />
        <Toolbar />
      </HeaderSection>
      <ContentSection>
        <MainContent />
      </ContentSection>
    </AppContainer>
  );
}

export default PowerPointInterface;
