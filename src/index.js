import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import StoreProvider from './StoreProvider';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
