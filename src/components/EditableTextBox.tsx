import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const TextBoxContainer = styled.div<{ isActive?: boolean; isTitle?: boolean }>`
  border: ${props => props.isActive ? '2px dashed #0078d4' : '1px dashed transparent'};
  cursor: text;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  &:hover {
    border: 1px dashed #d1d1d1;
  }
`;

const TextInput = styled.div<{ isTitle?: boolean }>`
  width: 100%;
  height: 100%;
  outline: none;
  font-family: 'Segoe UI';
  font-size: ${props => props.isTitle ? '60px' : '28px'};
  font-weight: ${props => props.isTitle ? '600' : '400'};
  color: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  &:empty::before {
    content: attr(data-placeholder);
    color: #616161;
    font-weight: 400;
  }
  
  &:focus {
    outline: none;
  }
`;

interface EditableTextBoxProps {
  placeholder: string;
  isTitle?: boolean;
  style?: React.CSSProperties;
}

function EditableTextBox({ 
  placeholder, 
  isTitle = false, 
  style 
}: EditableTextBoxProps) {
  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [content, setContent] = useState('');
  const textRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsActive(true);
    if (textRef.current) {
      textRef.current.focus();
    }
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleInput = () => {
    if (textRef.current) {
      setContent(textRef.current.innerText);
    }
  };

  return (
    <TextBoxContainer 
      isActive={isActive} 
      isTitle={isTitle}
      style={style}
      onClick={handleClick}
    >
      <TextInput
        ref={textRef}
        contentEditable
        suppressContentEditableWarning
        data-placeholder={placeholder}
        isTitle={isTitle}
        onBlur={handleBlur}
        onInput={handleInput}
      />
    </TextBoxContainer>
  );
};

export default EditableTextBox;
