import Shoe from '@models/shoe.model';
import { create } from 'zustand';

interface StockState {
  stock: Map<number, Shoe>;
  update: (newStock: Map<number, Shoe>) => void;
}

const useStockStore = create<StockState>()((set) => ({
  stock: new Map(),
  update: (newStock: Map<number, Shoe>) => set({ stock: newStock }),
}));

export default useStockStore;
