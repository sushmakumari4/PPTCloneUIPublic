import React, { useState } from 'react';
import styled from 'styled-components';

// Vertical Thumbnail Pane
const ThumbnailContainer = styled.div`
  position: absolute;
  width: 255px;
  height: 852px;
  left: 0px;
  top: 0px;
  background: #f0f0f0;
  overflow-y: auto;
`;

const ThumbnailList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 16px;
`;

const ThumbnailItem = styled.div<{ $isSelected?: boolean }>`
  width: 203px;
  height: 99px;
  position: relative;
  cursor: pointer;
  flex: none;
  flex-shrink: 0;
`;

const SlideContainer = styled.div<{ $isSelected?: boolean }>`
  position: absolute;
  width: 176px;
  height: 99px;
  left: 27px;
  top: 0px;
  ${props => props.$isSelected ? `
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.28)) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.24));
  ` : ''}
`;

const SlideContent = styled.div<{ $isSelected?: boolean }>`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  border-radius: 4px;
  ${props => props.$isSelected ? `
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
  ` : ''}
`;

const ThumbnailBorders = styled.div`
  position: absolute;
  width: 176px;
  height: 99px;
  left: 27px;
  top: 0px;
`;

const RestBorder = styled.div<{ $isSelected?: boolean }>`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  border-radius: 4px;
  ${props => props.$isSelected ? `
    border: 2px solid #C43E1C;
  ` : `
    border: 1px solid #D1D1D1;
  `}
`;

const SlideNumber = styled.div`
  position: absolute;
  width: 27px;
  height: 54px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideNumberText = styled.span<{ $isSelected?: boolean }>`
  font-family: 'Segoe UI';
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  ${props => props.$isSelected ? `
    font-weight: 600;
    color: #C43E1C;
  ` : `
    font-weight: 400;
    color: #242424;
  `}
`;

function SlideThumbnails() {
  const [selectedSlide, setSelectedSlide] = useState(3);

  const slides = [
    { id: 1, title: 'Slide 1' },
    { id: 2, title: 'Slide 2' },
    { id: 3, title: 'Slide 3' },
    { id: 4, title: 'Slide 4' },
    { id: 5, title: 'Slide 5' },
    { id: 6, title: 'Slide 6' },
    { id: 7, title: 'Slide 7' },
  ];

  return (
    <ThumbnailContainer>
      <ThumbnailList>
        {slides.map((slide) => (
          <ThumbnailItem
            key={slide.id}
            $isSelected={selectedSlide === slide.id}
            onClick={() => setSelectedSlide(slide.id)}
          >
            <SlideContainer $isSelected={selectedSlide === slide.id}>
              <SlideContent $isSelected={selectedSlide === slide.id} />
              <ThumbnailBorders>
                <RestBorder $isSelected={selectedSlide === slide.id} />
              </ThumbnailBorders>
            </SlideContainer>
            
            <SlideNumber>
              <SlideNumberText $isSelected={selectedSlide === slide.id}>
                {slide.id}
              </SlideNumberText>
            </SlideNumber>
          </ThumbnailItem>
        ))}
      </ThumbnailList>
    </ThumbnailContainer>
  );
}

export default SlideThumbnails;
