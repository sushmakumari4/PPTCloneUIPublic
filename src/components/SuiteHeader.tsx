import React from 'react';
import styled from 'styled-components';

// Copilot Icon Component
const CopilotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" fill="white"/>
    <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" stroke="#D1D1D1"/>
    <path d="M15.7789 23.9999H20.5938C21.6162 23.9999 22.3728 23.3436 22.9211 22.5283C23.4714 21.71 23.8793 20.638 24.1961 19.5875C24.5592 18.3835 25.0165 16.8667 24.9995 15.6448C24.991 15.0275 24.8622 14.4042 24.4636 13.9312C24.0503 13.4409 23.4256 13.2026 22.6254 13.2026H22.1916C21.8184 13.1715 21.4946 12.9228 21.3697 12.5632L20.936 11.3137C20.663 10.5271 19.9239 10 19.0939 10H18.2366L18.2211 10.0001H13.4062C12.3838 10.0001 11.6272 10.6564 11.0789 11.4717C10.5286 12.29 10.1207 13.362 9.80387 14.4125C9.44078 15.6165 8.98355 17.1333 9.00046 18.3552C9.009 18.9725 9.13784 19.5958 9.53642 20.0688C9.9497 20.5591 10.5744 20.7974 11.3746 20.7974H11.8084C12.1816 20.8285 12.5054 21.0772 12.6303 21.4368L13.064 22.6863C13.337 23.4729 14.0761 24 14.9061 24H15.7634C15.7686 24 15.7737 24 15.7789 23.9999ZM16.7753 15.6579L17.0257 14.872C17.1521 14.4752 17.5196 14.2059 17.9347 14.2059H18.4642C18.3917 14.3361 18.3332 14.4761 18.2911 14.6242C18.0295 15.5428 17.63 16.9413 17.2246 18.3423L16.9743 19.128C16.8479 19.5248 16.4804 19.7941 16.0653 19.7941H15.5358C15.6083 19.6639 15.6668 19.5239 15.7089 19.3758C15.9705 18.4572 16.37 17.0589 16.7753 15.6579ZM16.5245 20.7392C16.3982 21.1671 16.2841 21.5504 16.1631 21.8883C16.0267 22.2694 15.8932 22.5582 15.7485 22.7632C15.6622 22.8855 15.4958 22.9999 15.1241 22.9999C15.1215 22.9999 15.1189 23 15.1163 23H14.9061C14.5 23 14.1384 22.7421 14.0049 22.3573L13.5711 21.1078C13.5334 20.9992 13.4868 20.8954 13.4323 20.7974H13.8318C13.8699 20.7974 13.9078 20.7963 13.9455 20.7941L16.0653 20.7941C16.2226 20.7941 16.3765 20.7752 16.5245 20.7392ZM20.4289 12.8922C20.4666 13.0008 20.5132 13.1046 20.5677 13.2026H20.1682C20.1301 13.2026 20.0922 13.2037 20.0545 13.2059L17.9347 13.2059C17.7775 13.2059 17.6235 13.2248 17.4755 13.2608C17.6018 12.8329 17.7159 12.4496 17.8369 12.1117C17.9733 11.7306 18.1068 11.4418 18.2515 11.2368C18.3378 11.1145 18.5042 11.0001 18.8759 11.0001L18.8837 11H19.0939C19.5 11 19.8616 11.2579 19.9952 11.6427L20.4289 12.8922ZM10.7575 14.7022C11.0658 13.68 11.4393 12.7233 11.9047 12.0311C12.3722 11.336 12.8659 11.0001 13.4062 11.0001H17.2306C17.1043 11.2383 16.9967 11.5013 16.8993 11.7735C16.7618 12.1573 16.6343 12.5898 16.5027 13.0358L16.4736 13.1347C15.8956 15.0925 15.1567 17.676 14.751 19.101C14.6336 19.5133 14.2584 19.7974 13.8318 19.7974H11.3746C10.773 19.7974 10.4675 19.6251 10.2971 19.423C10.112 19.2033 10.0038 18.8521 9.9967 18.3413C9.98239 17.3072 10.38 15.954 10.7575 14.7022ZM22.0953 21.9689C21.6278 22.664 21.1341 22.9999 20.5938 22.9999H16.7694C16.8957 22.7617 17.0033 22.4987 17.1007 22.2265C17.2382 21.8427 17.3657 21.4102 17.4973 20.9642L17.5264 20.8653C18.1044 18.9075 18.8433 16.324 19.249 14.899C19.3664 14.4867 19.7416 14.2026 20.1682 14.2026H22.6254C23.227 14.2026 23.5325 14.3749 23.7029 14.577C23.888 14.7967 23.9962 15.1479 24.0033 15.6587C24.0176 16.6928 23.62 18.046 23.2425 19.2978C22.9342 20.32 22.5608 21.2767 22.0953 21.9689Z" fill="#242424"/>
  </svg>
);

const HeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  background: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-shrink: 0;
  margin: 0;
  padding: 0 8px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 412px;
  height: 48px;
`;

const IconButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const GridIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #616161;
  mask: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='4' height='4' fill='black'/%3E%3Crect x='6' y='1' width='4' height='4' fill='black'/%3E%3Crect x='11' y='1' width='4' height='4' fill='black'/%3E%3Crect x='1' y='6' width='4' height='4' fill='black'/%3E%3Crect x='6' y='6' width='4' height='4' fill='black'/%3E%3Crect x='11' y='6' width='4' height='4' fill='black'/%3E%3Crect x='1' y='11' width='4' height='4' fill='black'/%3E%3Crect x='6' y='11' width='4' height='4' fill='black'/%3E%3Crect x='11' y='11' width='4' height='4' fill='black'/%3E%3C/svg%3E");
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
`;

const PowerPointIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #c43e1c;
  border-radius: 2px;
  position: relative;
  
  &::after {
    content: 'P';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 10px;
    font-weight: bold;
  }
`;

const FileStatusSection = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 12px;
  gap: 4px;
  width: 316px;
  height: 48px;
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 276px;
  height: 16px;
`;

const FileName = styled.span`
  font-family: 'Segoe UI';
  font-size: 12px;
  line-height: 16px;
  color: #242424;
  text-align: right;
  width: 145px;
`;

const StatusIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #eaa300;
  border-radius: 2px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 11.05px;
    height: 11.03px;
    left: calc(50% - 11.05px/2 - 1.03px);
    top: calc(50% - 11.03px/2 - 0.99px);
    background: #eaa300;
  }
`;

const StatusText = styled.span`
  font-family: 'Segoe UI';
  font-size: 12px;
  line-height: 16px;
  color: #616161;
`;

const SearchSection = styled.div`
  width: 800px;
  height: 32px;
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 16px;
  gap: 12px;
  width: 800px;
  height: 32px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const SearchIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #616161;
  flex: none;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1.5px solid #616161;
    border-radius: 50%;
    top: 1px;
    left: 1px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 6px;
    background: #616161;
    border-radius: 1px;
    bottom: 1px;
    right: 1px;
    transform: rotate(45deg);
    transform-origin: bottom;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  outline: none;
  font-family: 'Segoe UI';
  font-size: 14px;
  line-height: 20px;
  color: #616161;
  background: transparent;
  
  &::placeholder {
    color: #616161;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  width: 96px;
  height: 48px;
`;

const SettingsIcon = styled.div`
  width: 16.23px;
  height: 17px;
  background: #616161;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #616161;
    border-radius: 50%;
    top: 0.5px;
    left: 0.115px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #f0f0f0;
    border-radius: 50%;
    top: 5.5px;
    left: 5.115px;
  }
`;

const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #c43e1c;
  }
`;

const ChevronIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 4.5px;
    background: #616161;
    left: 2px;
    top: 3.75px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
`;

function SuiteHeader() {
  return (
    <HeaderContainer>
      <LeftSection>
        <IconButton>
          <GridIcon />
        </IconButton>
        <IconButton>
          <PowerPointIcon />
        </IconButton>
        <FileStatusSection>
          <FileInfo>
            <FileName>Presentation 42</FileName>
            <StatusIcon />
            <StatusText>Confidential</StatusText>
            <StatusText>Saved</StatusText>
          </FileInfo>
          <ChevronIcon />
        </FileStatusSection>
      </LeftSection>
      
      <SearchSection>
        <SearchContainer>
          <CopilotIcon />
          <SearchInput placeholder="Ask Copilot anything" />
        </SearchContainer>
      </SearchSection>
      
      <RightSection>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <UserAvatar>
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNjNDNlMWMiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiLz48L3N2Zz4=" alt="User Avatar" />
        </UserAvatar>
      </RightSection>
    </HeaderContainer>
  );
}

export default SuiteHeader;
