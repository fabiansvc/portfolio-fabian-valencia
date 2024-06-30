import { Vector3 } from "three";
import { create } from "zustand";

const useSignStore = create((set) => ({
  signSelected: new Vector3(0, 2, 4),
  setSignSelected: (sign) => set({ signSelected: sign }),
}));

export default useSignStore;
