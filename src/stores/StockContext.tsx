import Shoe from '@models/shoe.model';
import { Context, createContext } from 'react';

export const StockContext: Context<Map<number, Shoe>> = createContext(new Map());
export const OGStockContext = createContext({});

export default StockContext;
