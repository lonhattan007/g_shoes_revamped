import Shoe from '@models/shoe.model';
import { Context, createContext } from 'react';

const StockContext: Context<Array<Shoe>> = createContext(new Array<Shoe>());

export default StockContext;
