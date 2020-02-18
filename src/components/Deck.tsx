import * as React from 'react';
import Slide from './Slide';
import Center from './Center';
import { Title, Paragraph } from '../UI';

function Deck(): JSX.Element {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slides] = React.useState([
    <Center>
      <Title>Getting started with react</Title>
    </Center>,
    <Center>
      <Title>For this session:</Title>
      <ul>
        <Paragraph>1</Paragraph>
        <Paragraph>2</Paragraph>
        <Paragraph>3</Paragraph>
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
