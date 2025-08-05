import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  width: 100%;
  height: 36px;
  background: #f0f0f0;
  border-radius: 4px;
  flex-shrink: 0;
  margin: 0;
`;

const TabsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

const Tab = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 8px 4px;
  gap: 2px;
  background: #f0f0f0;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const TabText = styled.span<{ isActive?: boolean }>`
  font-family: 'Segoe UI';
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-weight: ${props => props.isActive ? 600 : 400};
  color: ${props => props.isActive ? '#242424' : '#424242'};
`;

const TabUnderline = styled.div<{ isActive?: boolean; color?: string }>`
  width: 100%;
  height: 2px;
  background: ${props => {
    if (!props.isActive) return 'transparent';
    return props.color || '#185abd';
  }};
  border-radius: 2px;
  display: ${props => props.isActive ? 'block' : 'none'};
`;

const Filler = styled.div`
  flex: 1;
  height: 36px;
`;

const CollabSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 598px;
  height: 36px;
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 112px;
  height: 26px;
`;

const Avatar = styled.div<{ borderColor?: string; bgColor?: string }>`
  width: 26px;
  height: 26px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: 3px;
    top: 3px;
    background: ${props => props.bgColor || '#f1bbbd'};
    border: 1px solid #ffffff;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    left: 1px;
    top: 1px;
    border: 2px solid ${props => props.borderColor || '#d13438'};
    border-radius: 50%;
  }
`;

const AvatarText = styled.span`
  position: absolute;
  width: 20px;
  height: 12px;
  left: 3px;
  top: 7px;
  font-family: 'Segoe UI';
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #751d20;
  z-index: 1;
`;

const ActionButton = styled.button<{ isPrimary?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;
  height: 24px;
  background: ${props => props.isPrimary ? '#c43e1c' : '#ffffff'};
  color: ${props => props.isPrimary ? '#ffffff' : '#242424'};
  border: 1px solid ${props => props.isPrimary ? 'transparent' : '#d1d1d1'};
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Segoe UI';
  font-size: 12px;
  line-height: 16px;
  
  &:hover {
    background: ${props => props.isPrimary ? '#a83419' : '#f3f2f1'};
  }
`;

const PlusCount = styled.span`
  font-size: 14px;
  color: #616161;
  width: 18px;
`;

function Navigation() {
  const [activeTab, setActiveTab] = useState('Home');
  
  const tabs = [
    { name: 'File', width: '37px' },
    { name: 'Home', width: '55px', color: '#c43e1c' },
    { name: 'Insert', width: '51px' },
    { name: 'Design', width: '59px' },
    { name: 'Transitions', width: '82px' },
    { name: 'Animations', width: '86px' },
    { name: 'Slide Show', width: '84px' },
    { name: 'Review', width: '59px' },
    { name: 'View', width: '46px' },
    { name: 'Help', width: '45px' }
  ];

  return (
    <NavContainer>
      <TabsSection>
        {tabs.map((tab) => (
          <Tab 
            key={tab.name}
            isActive={activeTab === tab.name}
            onClick={() => setActiveTab(tab.name)}
            style={{ width: tab.width }}
          >
            <TabText isActive={activeTab === tab.name}>
              {tab.name}
            </TabText>
            <TabUnderline 
              isActive={activeTab === tab.name}
              color={tab.color}
            />
          </Tab>
        ))}
      </TabsSection>
      
      <Filler />
      
      <CollabSection>
        <AvatarGroup>
          <Avatar borderColor="#d13438" bgColor="#f1bbbd">
            <AvatarText>MM</AvatarText>
          </Avatar>
          <Avatar borderColor="#0078d4" bgColor="#f0f0f0">
            <div style={{
              width: '20px', 
              height: '20px', 
              borderRadius: '50%', 
              position: 'absolute', 
              left: '3px', 
              top: '3px',
              background: 'linear-gradient(45deg, #0078d4, #40e0d0)'
            }} />
          </Avatar>
          <Avatar borderColor="#ff8c00" bgColor="#ffddb3">
            <AvatarText style={{color: '#8f4f00'}}>FS</AvatarText>
          </Avatar>
          <PlusCount>+4</PlusCount>
        </AvatarGroup>
        
        <ActionButton>
          <span>Catch Up</span>
        </ActionButton>
        
        <ActionButton>
          <span>Comments</span>
        </ActionButton>
        
        <ActionButton>
          <span>Present</span>
        </ActionButton>
        
        <ActionButton>
          <span>Editing</span>
        </ActionButton>
        
        <ActionButton isPrimary>
          <span>Share</span>
        </ActionButton>
      </CollabSection>
    </NavContainer>
  );
};

export default Navigation;
