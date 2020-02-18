import React from 'react';
import './App.css';
import Deck from './components/Deck';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './UI/theme';
import { Switch } from './UI';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Switch onClick={toggleTheme}/>
      <Deck />
    </ThemeProvider>
  );
}

export default App;
