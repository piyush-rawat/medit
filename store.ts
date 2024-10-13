import { create } from "zustand";

interface StoreState {
  selectedCategory: null | string;
  setSelectedCategory: (category: null | string) => void;
}

const useStore = create<StoreState>()((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category: null | string) =>
    set((state) => ({ selectedCategory: category })),
}));

export default useStore;
