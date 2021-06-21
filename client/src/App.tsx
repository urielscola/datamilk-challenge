import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'assets/styles';

import Routes from 'routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <GlobalStyles />
          <Routes />
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
