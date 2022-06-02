import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
//import AuthTabProvider from './contexts/AuthTabProvider';
import CartProvider from "./contexts/CartProvider";
import SelectQuantityProvider from "./contexts/SelectQuantityProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CartProvider>
      <SelectQuantityProvider>
        <BrowserRouter>
          {/* <AuthTabProvider> */}
            <App />
          {/* </AuthTabProvider> */}
        </BrowserRouter>
      </SelectQuantityProvider>
    </CartProvider>
  </Provider>
);

