import React from 'react';
import styled from 'styled-components';
import {
  ArrowUndo20Regular,
  ArrowRedo20Regular,
  Clipboard20Regular,
  PaintBrush20Regular,
  AddSquare20Regular,
  Copy20Regular,
  Eraser20Regular,
  Shapes20Regular,
  Add20Regular,
  Delete20Regular,
  ArrowReset20Regular,
  ArrowDownload20Regular,
  TextBold20Regular,
  TextItalic20Regular,
  TextUnderline20Regular,
  Highlight20Regular,
  TextColor20Regular,
  TextAlignLeft20Regular,
  TextAlignCenter20Regular,
  TextAlignRight20Regular,
  TextBulletList20Regular,
  TextNumberListLtr20Regular,
  DesignIdeas20Regular,
  Mic20Regular
} from '@fluentui/react-icons';

// Copilot Icon Component
const CopilotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" fill="white"/>
    <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="#D1D1D1"/>
    <path d="M15.7789 23.9999H20.5938C21.6162 23.9999 22.3728 23.3436 22.9211 22.5283C23.4714 21.71 23.8793 20.638 24.1961 19.5875C24.5592 18.3835 25.0165 16.8667 24.9995 15.6448C24.991 15.0275 24.8622 14.4042 24.4636 13.9312C24.0503 13.4409 23.4256 13.2026 22.6254 13.2026H22.1916C21.8184 13.1715 21.4946 12.9228 21.3697 12.5632L20.936 11.3137C20.663 10.5271 19.9239 10 19.0939 10H18.2366L18.2211 10.0001H13.4062C12.3838 10.0001 11.6272 10.6564 11.0789 11.4717C10.5286 12.29 10.1207 13.362 9.80387 14.4125C9.44078 15.6165 8.98355 17.1333 9.00046 18.3552C9.009 18.9725 9.13784 19.5958 9.53642 20.0688C9.9497 20.5591 10.5744 20.7974 11.3746 20.7974H11.8084C12.1816 20.8285 12.5054 21.0772 12.6303 21.4368L13.064 22.6863C13.337 23.4729 14.0761 24 14.9061 24H15.7634C15.7686 24 15.7737 24 15.7789 23.9999ZM16.7753 15.6579L17.0257 14.872C17.1521 14.4752 17.5196 14.2059 17.9347 14.2059H18.4642C18.3917 14.3361 18.3332 14.4761 18.2911 14.6242C18.0295 15.5428 17.63 16.9413 17.2246 18.3423L16.9743 19.128C16.8479 19.5248 16.4804 19.7941 16.0653 19.7941H15.5358C15.6083 19.6639 15.6668 19.5239 15.7089 19.3758C15.9705 18.4572 16.37 17.0589 16.7753 15.6579ZM16.5245 20.7392C16.3982 21.1671 16.2841 21.5504 16.1631 21.8883C16.0267 22.2694 15.8932 22.5582 15.7485 22.7632C15.6622 22.8855 15.4958 22.9999 15.1241 22.9999C15.1215 22.9999 15.1189 23 15.1163 23H14.9061C14.5 23 14.1384 22.7421 14.0049 22.3573L13.5711 21.1078C13.5334 20.9992 13.4868 20.8954 13.4323 20.7974H13.8318C13.8699 20.7974 13.9078 20.7963 13.9455 20.7941L16.0653 20.7941C16.2226 20.7941 16.3765 20.7752 16.5245 20.7392ZM20.4289 12.8922C20.4666 13.0008 20.5132 13.1046 20.5677 13.2026H20.1682C20.1301 13.2026 20.0922 13.2037 20.0545 13.2059L17.9347 13.2059C17.7775 13.2059 17.6235 13.2248 17.4755 13.2608C17.6018 12.8329 17.7159 12.4496 17.8369 12.1117C17.9733 11.7306 18.1068 11.4418 18.2515 11.2368C18.3378 11.1145 18.5042 11.0001 18.8759 11.0001L18.8837 11H19.0939C19.5 11 19.8616 11.2579 19.9952 11.6427L20.4289 12.8922ZM10.7575 14.7022C11.0658 13.68 11.4393 12.7233 11.9047 12.0311C12.3722 11.336 12.8659 11.0001 13.4062 11.0001H17.2306C17.1043 11.2383 16.9967 11.5013 16.8993 11.7735C16.7618 12.1573 16.6343 12.5898 16.5027 13.0358L16.4736 13.1347C15.8956 15.0925 15.1567 17.676 14.751 19.101C14.6336 19.5133 14.2584 19.7974 13.8318 19.7974H11.3746C10.773 19.7974 10.4675 19.6251 10.2971 19.423C10.112 19.2033 10.0038 18.8521 9.9967 18.3413C9.98239 17.3072 10.38 15.954 10.7575 14.7022ZM22.0953 21.9689C21.6278 22.664 21.1341 22.9999 20.5938 22.9999H16.7694C16.8957 22.7617 17.0033 22.4987 17.1007 22.2265C17.2382 21.8427 17.3657 21.4102 17.4973 20.9642L17.5264 20.8653C18.1044 18.9075 18.8433 16.324 19.249 14.899C19.3664 14.4867 19.7416 14.2026 20.1682 14.2026H22.6254C23.227 14.2026 23.5325 14.3749 23.7029 14.577C23.888 14.7967 23.9962 15.1479 24.0033 15.6587C24.0176 16.6928 23.62 18.046 23.2425 19.2978C22.9342 20.32 22.5608 21.2767 22.0953 21.9689Z" fill="#242424"/>
  </svg>
);

// Chevron Button Component
const ChevronButton = () => (
  <svg width="16" height="12" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1968_1983)">
      <rect width="48" height="32" rx="4" fill="white"/>
      <path d="M13.0854 9C13.2913 8.4174 13.8469 8 14.5 8H17.5C18.1531 8 18.7087 8.4174 18.9146 9H20.5C21.3284 9 22 9.67157 22 10.5V22.5C22 23.3284 21.3284 24 20.5 24H11.5C10.6716 24 10 23.3284 10 22.5V10.5C10 9.67157 10.6716 9 11.5 9H13.0854ZM14.5 9C14.2239 9 14 9.22386 14 9.5C14 9.77614 14.2239 10 14.5 10H17.5C17.7761 10 18 9.77614 18 9.5C18 9.22386 17.7761 9 17.5 9H14.5ZM13.0854 10H11.5C11.2239 10 11 10.2239 11 10.5V22.5C11 22.7761 11.2239 23 11.5 23H20.5C20.7761 23 21 22.7761 21 22.5V10.5C21 10.2239 20.7761 10 20.5 10H18.9146C18.7087 10.5826 18.1531 11 17.5 11H14.5C13.8469 11 13.2913 10.5826 13.0854 10Z" fill="#3A3A38"/>
      <path d="M32 0H44C46.2091 0 48 1.79086 48 4V28C48 30.2091 46.2091 32 44 32H32V0Z" fill="white"/>
      <path d="M39.502 19.2051L34.6445 14.3535L35.3535 13.6445L39.502 17.793L43.6445 13.6445L44.3535 14.3535L39.502 19.2051Z" fill="#616161"/>
    </g>
    <defs>
      <clipPath id="clip0_1968_1983">
        <rect width="48" height="32" rx="4" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  flex-shrink: 0;
  margin: 0;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 8px;
  width: 100%;
  height: 40px;
`;

const ToolGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
`;

const ToolButton = styled.button<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  gap: 4px;
  width: ${props => props.width || '32px'};
  height: 32px;
  background: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #f3f2f1;
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: #242424;
  }
`;

const TextButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 4px;
  height: 32px;
  background: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Segoe UI';
  font-size: 14px;
  line-height: 20px;
  color: #242424;
  
  &:hover {
    background: #f3f2f1;
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: #242424;
  }
`;

const ColoredIcon = styled.div<{ color?: string }>`
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: #242424;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 3px;
    background: ${props => props.color || '#242424'};
    border-radius: 1px;
  }
`;

const SplitButton = styled.div`
  display: flex;
  align-items: flex-start;
  width: 48px;
  height: 32px;
  background: #ffffff;
  border-radius: 4px;
`;

const SplitButtonMain = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: #ffffff;
  border-radius: 4px 0px 0px 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f3f2f1;
  }
`;

const SplitButtonChevron = styled.button`
  width: 16px;
  height: 32px;
  border: none;
  background: #ffffff;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f3f2f1;
  }
`;

const Divider = styled.div`
  width: 9px;
  height: 40px;
  background: #ffffff;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 1px;
    left: calc(50% - 1px/2);
    top: 6px;
    bottom: 6px;
    background: #d1d1d1;
  }
`;

const FontPicker = styled.div`
  display: flex;
  align-items: flex-start;
  width: 158px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
`;

const FontSelector = styled.div`
  display: flex;
  align-items: flex-start;
  width: 114px;
  height: 24px;
  border-radius: 4px 0px 0px 4px;
`;

const FontText = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 4px 0px 4px 8px;
  width: 102px;
  height: 24px;
  
  span {
    font-family: 'Segoe UI';
    font-size: 12px;
    line-height: 16px;
    color: #242424;
    width: 94px;
  }
`;

const FontChevron = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 7px 2px;
  width: 12px;
  height: 24px;
  border-radius: 0px 4px 4px 0px;
`;

const FontSize = styled.div`
  display: flex;
  align-items: flex-start;
  width: 44px;
  height: 24px;
  border: 1px solid #d1d1d1;
  border-radius: 0px 4px 4px 0px;
`;

const SizeText = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 4px 0px 4px 8px;
  width: 32px;
  height: 24px;
  
  span {
    font-family: 'Segoe UI';
    font-size: 12px;
    line-height: 16px;
    color: #242424;
    width: 24px;
  }
`;

const IconPlaceholder = styled.div<{ color?: string }>`
  width: 20px;
  height: 20px;
  background: ${props => props.color || '#3a3a38'};
  border-radius: 2px;
`;

const ChevronIcon = styled.div`
  width: 12px;
  height: 12px;
  background: #616161;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 4px;
    background: #616161;
    left: 2px;
    top: 4px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`;

function Toolbar() {
  return (
    <ToolbarContainer>
      <ControlsContainer>
        {/* Undo, Copy, Format Painter */}
        <ToolGroup>
          <SplitButton>
            <SplitButtonMain>
              <ArrowUndo20Regular />
            </SplitButtonMain>
            <SplitButtonChevron>
              <ChevronButton />
            </SplitButtonChevron>
          </SplitButton>
          
          <SplitButton>
            <SplitButtonMain>
              <Clipboard20Regular />
            </SplitButtonMain>
            <SplitButtonChevron>
              <ChevronButton />
            </SplitButtonChevron>
          </SplitButton>
          
          <ToolButton>
            <PaintBrush20Regular />
          </ToolButton>
          
          <ToolButton>
            <Eraser20Regular />
          </ToolButton>
        </ToolGroup>

        <Divider />

        {/* Slide Controls */}
        <ToolGroup>
          <TextButton style={{width: '98px'}}>
            <Add20Regular />
            <span>New Slide</span>
          </TextButton>
          
          <ToolButton>
            <ArrowDownload20Regular />
          </ToolButton>
          
          <ToolButton>
            <Delete20Regular />
          </ToolButton>
          
          <ToolButton>
            <ArrowReset20Regular />
          </ToolButton>
        </ToolGroup>

        <Divider />

        {/* Font Controls */}
        <ToolGroup style={{gap: '0px', paddingRight: '4px'}}>
          <FontPicker>
            <FontSelector>
              <FontText>
                <span>Calibri</span>
              </FontText>
              <FontChevron>
                <ChevronButton />
              </FontChevron>
            </FontSelector>
            <FontSize>
              <SizeText>
                <span>11</span>
              </SizeText>
              <FontChevron>
                <ChevronButton />
              </FontChevron>
            </FontSize>
          </FontPicker>
        </ToolGroup>

        {/* Text Formatting */}
        <ToolGroup>
          <ToolButton>
            <TextBold20Regular />
          </ToolButton>
          
          <ToolButton>
            <TextItalic20Regular />
          </ToolButton>
          
          <ToolButton>
            <TextUnderline20Regular />
          </ToolButton>
          
          <SplitButton>
            <SplitButtonMain>
              <ColoredIcon color="#ffff00">
                <Highlight20Regular />
              </ColoredIcon>
            </SplitButtonMain>
            <SplitButtonChevron>
              <ChevronButton />
            </SplitButtonChevron>
          </SplitButton>
          
          <SplitButton>
            <SplitButtonMain>
              <ColoredIcon color="#ff0000">
                <TextColor20Regular />
              </ColoredIcon>
            </SplitButtonMain>
            <SplitButtonChevron>
              <ChevronButton />
            </SplitButtonChevron>
          </SplitButton>
          
          <ToolButton>
            <Copy20Regular />
          </ToolButton>
        </ToolGroup>

        <Divider />

        {/* Lists and Alignment */}
        <ToolGroup>
          <SplitButton>
            <SplitButtonMain>
              <TextBulletList20Regular />
            </SplitButtonMain>
            <SplitButtonChevron>
              <ChevronButton />
            </SplitButtonChevron>
          </SplitButton>
          
          <SplitButton>
            <SplitButtonMain>
              <TextNumberListLtr20Regular />
            </SplitButtonMain>
            <SplitButtonChevron>
              <ChevronButton />
            </SplitButtonChevron>
          </SplitButton>
          
          <SplitButton>
            <SplitButtonMain>
              <TextAlignLeft20Regular />
            </SplitButtonMain>
            <SplitButtonChevron>
              <ChevronButton />
            </SplitButtonChevron>
          </SplitButton>
        </ToolGroup>

        <Divider />

        {/* Advanced Tools */}
        <ToolGroup>
          <TextButton style={{width: '91px'}}>
            <DesignIdeas20Regular />
            <span>Designer</span>
          </TextButton>
        </ToolGroup>

        <Divider />

        <ToolGroup>
          <ToolButton>
            <CopilotIcon />
          </ToolButton>
        </ToolGroup>
      </ControlsContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;
