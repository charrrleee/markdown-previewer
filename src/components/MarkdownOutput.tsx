import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

// Styled Output Container
const OutputContainer = styled.div`
flex: 1; /* Take up 50% of available space */
  width: 100%;
  height: 100%;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  min-height: 300px;
`;

// Define the MarkdownOutputProps interface
interface MarkdownOutputProps {
  markdown: string;
}

// Define the MarkdownOutput functional component
const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
