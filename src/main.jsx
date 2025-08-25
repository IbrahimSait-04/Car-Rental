import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { StrictMode } from 'react';
import Store from './Redux/Store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
