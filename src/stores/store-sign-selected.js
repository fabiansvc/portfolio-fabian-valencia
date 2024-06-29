// store.js
import { create } from "zustand";

// Creamos el store con Zustand
const useSignStore = create((set) => ({
  signSelected: "NONE",
  setSignSelected: (sign) => set({ signSelected: sign }),
}));

export default useSignStore;
