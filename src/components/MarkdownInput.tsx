import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  flex: 1;  
  max-width: 50%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;  
`;

// Define the MarkdownInputProps interface
interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// Define the MarkdownInput functional component
const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
