import React from 'react';
import styled from 'styled-components';

// Styled Header Container
const HeaderContainer = styled.div`
  background-color: #f0f0f0;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

// Styled Title component
const Title = styled.h1`
  font-size: 2em;
  color: #000;
  margin-bottom: 0.5em;
`;

// Styled Button component
const Button = styled.button`
  background-color: #008cba;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #008cba;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #005f6b;
  }
`;

// Define the Header functional component
interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Toggle Guide</Button>
    </HeaderContainer>
  );
};

export default Header;