import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { shoes } from '@data/shoes.json';
import Shoe from '@models/shoe.model.ts';
import { StockContext } from '@stores/StockContext';

const shoesInStock: Map<number, Shoe> = new Map();
shoes.forEach((shoe: Shoe) => {
  shoesInStock.set(shoe.id, Shoe.fromJson(shoe));
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StockContext.Provider value={shoesInStock}>
      <App />
    </StockContext.Provider>
  </React.StrictMode>,
);
