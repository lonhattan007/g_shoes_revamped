import Shoe from '@models/shoe.model';
import { Context, createContext } from 'react';

export const StockContext: Context<Array<Shoe>> = createContext(new Array<Shoe>());
export const OGStockContext = createContext({});

export default StockContext;
