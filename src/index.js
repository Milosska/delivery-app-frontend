import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter basename="/delivery-app-frontend">
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);