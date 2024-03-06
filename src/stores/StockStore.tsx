import { create } from 'zustand';

interface StockState {
  stock: object;
  update: (newStock: object) => void;
}

const useStockStore = create<StockState>()((set) => ({
  stock: {},
  update: (newStock: object) => set({ stock: newStock }),
}));

export default useStockStore;
