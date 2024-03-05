import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { shoes } from '@data/shoes.json';
import Shoe from '@models/shoe.model.ts';
import StockContext from '@stores/StockContext';
import CartContext from '@stores/CartContext';

let shoesInStock: Array<Shoe> = [];
shoes.forEach((shoe) => {
  shoesInStock.push(Shoe.fromJson(shoe));
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StockContext.Provider value={shoesInStock}>
      <CartContext.Provider value={[]}>
        <App />
      </CartContext.Provider>
    </StockContext.Provider>
  </React.StrictMode>,
);
