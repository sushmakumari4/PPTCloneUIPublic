import React from 'react';
import styled from 'styled-components';
import SlideCanvas from './SlideCanvas';

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 124px);
  background: #f0f0f0;
  position: relative;
`;

// Temporary inline SlideThumbnails component
const ThumbnailPanel = styled.div`
  position: absolute;
  width: 255px;
  height: 852px;
  left: 0px;
  top: 0px;
  background: #f0f0f0;
  border-right: 1px solid #d1d1d1;
  padding: 12px;
`;

const ThumbnailItem = styled.div<{ selected?: boolean }>`
  width: 231px;
  height: 130px;
  background: white;
  border: ${props => props.selected ? '2px solid #C43E1C' : '1px solid #D1D1D1'};
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI';
  font-size: 12px;
  color: ${props => props.selected ? '#C43E1C' : '#666'};
`;

const CanvasArea = styled.div`
  flex: 1;
  margin-left: 255px;
  display: flex;
  flex-direction: column;
`;

function MainContent() {
  const [selectedSlide, setSelectedSlide] = React.useState(3);

  return (
    <ContentContainer>
      <ThumbnailPanel>
        {[1, 2, 3, 4, 5, 6, 7].map(slideNum => (
          <ThumbnailItem
            key={slideNum}
            selected={selectedSlide === slideNum}
            onClick={() => setSelectedSlide(slideNum)}
          >
            Slide {slideNum}
          </ThumbnailItem>
        ))}
      </ThumbnailPanel>
      <CanvasArea>
        <SlideCanvas />
      </CanvasArea>
    </ContentContainer>
  );
}

export default MainContent;
