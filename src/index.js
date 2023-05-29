import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from 'GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter basename="/delivery-app-frontend">
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
