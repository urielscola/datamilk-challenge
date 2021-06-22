import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as AlertProvider } from 'react-alert';
import { GlobalStyles, theme } from 'assets/styles';
import Routes from 'routes';
import { AlertTemplate, alertConfig } from 'components/common/alert';
import { LoadingProvider } from './contexts/loading-context';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...alertConfig}>
          <>
            <GlobalStyles />
            <LoadingProvider>
              <Routes />
            </LoadingProvider>
          </>
        </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
