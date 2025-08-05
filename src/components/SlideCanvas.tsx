import React from 'react';
import styled from 'styled-components';
import EditableTextBox from './EditableTextBox';

const CanvasContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: #f0f0f0;
  min-height: 100%;
`;

const SlideArea = styled.div`
  width: 960px;
  height: 540px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const NotesArea = styled.div`
  width: 960px;
  height: 120px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Segoe UI';
  font-size: 12px;
  color: #616161;
  display: flex;
  align-items: flex-start;
  cursor: text;
  
  &::before {
    content: 'Click to add notes';
  }
  
  &:hover {
    border-color: #b3b3b3;
  }
`;

const StatusBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 255px;
  right: 0;
  height: 24px;
  background: #f0f0f0;
  border-top: 1px solid #d1d1d1;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-family: 'Segoe UI';
  font-size: 12px;
  color: #616161;
  gap: 16px;
`;

function SlideCanvas() {
  return (
    <>
      <CanvasContainer>
        <SlideArea>
          <EditableTextBox 
            placeholder="Click to add title"
            isTitle
            style={{
              position: 'absolute',
              top: '120px',
              left: '80px',
              right: '80px',
              height: '160px'
            }}
          />
          <EditableTextBox 
            placeholder="Click to add subtitle"
            style={{
              position: 'absolute',
              top: '300px',
              left: '80px',
              right: '80px',
              height: '80px'
            }}
          />
        </SlideArea>
        <NotesArea />
      </CanvasContainer>
      <StatusBar>
        <span>Slide 3 of 8</span>
        <span>English (U.S.)</span>
        <div style={{marginLeft: 'auto'}}>
          87%
        </div>
      </StatusBar>
    </>
  );
};

export default SlideCanvas;
