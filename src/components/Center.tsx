import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


function Center({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Center;