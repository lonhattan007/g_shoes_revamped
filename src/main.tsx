import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createContext } from 'react';
import { shoes } from '@data/shoes.json';

export const ShoesContext = createContext(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoesContext.Provider value={shoes}>
      <App />
    </ShoesContext.Provider>
  </React.StrictMode>,
);
