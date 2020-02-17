import * as React from 'react';
import Slide from './Slide';
import Center from './Center';

function Deck(): JSX.Element {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slides] = React.useState([
    <Center>
      <h1>Getting started with react</h1>
    </Center>,
    <Center>
      <h1>For this session:</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Center>,
    <Center>
      <h1>Slide 3</h1>
    </Center>,
    <Center>
      <h1>Slide 4</h1>
    </Center>,
  ]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  function renderSlides() {
    return slides.filter((content, index) => {
      if (index === currentSlide) {
        return <Slide key={index}>{content}</Slide>
      }
      return null;
    })
  }

  function handleKeyDown(e: any) {
    switch (e.keyCode) { 
      case 37:
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0);
      break;
    case 39:
      setCurrentSlide(currentSlide === slides.length - 1 ? slides.length - 1 : currentSlide + 1);
      break;
    }
  }
  

  return (
    <div>
      {renderSlides()}
    </div>
  )
}

export default Deck;
