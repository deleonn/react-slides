import * as React from 'react';

interface Props {
  children: JSX.Element;
}

function Slide({ children }: Props): JSX.Element {
  return (
    <div>
      {children}
    </div>
  );
}

export default Slide;
