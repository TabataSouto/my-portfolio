import React from 'react'
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/themes/default';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
