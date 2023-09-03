import create from "zustand";
import { persist } from "zustand/middleware";

const useBearStore = create(
  persist(
    (set) => ({
      bears: 0,
      results: [], // Tambahkan array untuk menyimpan hasil
      increment: () => set((state) => ({ bears: state.bears + 1 })),
      decrement: () => set((state) => ({ bears: state.bears - 1 })),
      addResult: (result) =>
        set((state) => ({ results: [...state.results, result] })), // Tambahkan action untuk menyimpan hasil
    }),
    {
      name: "bear-storage", // Nama item di dalam penyimpanan (harus unik)
      getStorage: () => localStorage, // Gunakan localStorage untuk menyimpan data (bisa diganti dengan sessionStorage)
    }
  )
);

export default useBearStore;
