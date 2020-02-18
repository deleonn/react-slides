import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fonts.title.size};
  color: ${props => props.theme.primaryColor};
`;

function Title({ children }: Props) {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
};

export default Title;
