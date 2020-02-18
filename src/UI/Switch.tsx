import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';

interface Props {
  onClick: () => void;
  theme: any;
}

const StyledSwitch = styled.button`
  top: 1rem;
  right: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  background: none;
  position: absolute;
  transition: all 220ms ease-in;
  color: ${props => props.theme.primaryColor}
`;

function Switch({ onClick, theme }: Props) {
  return (
    <StyledSwitch onClick={() => onClick()}>
      {theme.dark ? < IoIosMoon/> : <IoIosSunny />}
    </StyledSwitch>
  )
}

export default withTheme(Switch);