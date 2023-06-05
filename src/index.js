import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import App from './App';
import './index.css'

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props)
      }
    })
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
