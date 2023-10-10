import React from 'react';
import styled from 'styled-components';

// Styled Guide Container
const GuideContainer = styled.div`
  background-color: #f9f9f9;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 auto;
  color: #000;
  max-height: 250px;
  overflow-y: auto;
`;

// Styled Code element
const Code = styled.code`
  color: #000;
  background-color: #f3f3f3;
  padding: 2px 4px;
  border-radius: 3px;
`;

// Define the MarkdownGuide functional component
const MarkdownGuide: React.FC = () => {
    return (
      <GuideContainer>
        <h2>Markdown Guide</h2>
        <ul>
          <li>
            <Code># Heading 1</Code> - Renders as a top-level heading
          </li>
          <li>
            <Code>## Heading 2</Code> - Renders as a second-level heading
          </li>
          <li>
            <Code>**Bold Text**</Code> - Renders as <strong>Bold Text</strong>
          </li>
          <li>
            <Code>*Italic Text*</Code> - Renders as <em>Italic Text</em>
          </li>
          <li>
            <Code>![Image Alt Text](https://example.com/image.jpg)</Code> - Inserts an image
          </li>
          <li>
            <Code>[Link Text](https://example.com)</Code> - Creates a link
          </li>
          <li>
            <Code>`Inline Code`</Code> - Renders as inline code
          </li>
          <li>
            <Code>```
            Code Block
            ```</Code> - Renders as a code block
          </li>
          <li>
            <Code>- Unordered List Item 1</Code> - Creates an unordered list item
          </li>
          <li>
            <Code>1. Ordered List Item 1</Code> - Creates an ordered list item
          </li>
          <li>
            <Code> Blockquote</Code> - Renders as a blockquote
          </li>
          <li>
            <Code>Horizontal Line</Code> - Creates a horizontal line
          </li>
          <li>
            <Code>**_Combined Emphasis_**</Code> - Renders as <strong><em>Combined Emphasis</em></strong>
          </li>
          {/* Add more Markdown syntaxes as needed */}
        </ul>
      </GuideContainer>
    );
  };
  

export default MarkdownGuide;
