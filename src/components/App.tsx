import React, { useState } from 'react';
import Header from './Header';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';
import MarkdownGuide from './MarkdownGuide';
import styled from 'styled-components';

// Styled Title component
const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

const App: React.FC = () => {
  // Define initial state for the markdown text and guide toggle
  const [markdown, setMarkdown] = useState<string>(`# Hello World`);
  const [showGuide, setShowGuide] = useState<boolean>(false);

  // Event handler to update markdown text
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  // Event handler to toggle guide visibility
  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <AppContainer>
      <Header onToggleGuide={toggleGuide} />
      {showGuide && <MarkdownGuide />}
      <div style={{ display: 'flex' }}>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </AppContainer>
  );
}

export default App;
