import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import ProductsProvider from './contexts/ProductsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  
);
