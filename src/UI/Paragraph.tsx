import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const StyledParagraph = styled.h1`
  font-size: ${props => props.theme.fonts.paragraph.size};
  color: ${props => props.theme.primaryColor};
`;

function Paragraph({ children }: Props) {
  return (
    <StyledParagraph>
      {children}
    </StyledParagraph>
  )
};

export default Paragraph;
