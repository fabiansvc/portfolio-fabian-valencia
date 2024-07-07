import { Vector3 } from "three";
import { create } from "zustand";

const useSignStore = create((set) => ({
  sign: {
    name: "NOT_SIGN_SELECTED",
    positionCamera: new Vector3(0, 2, 4),
  },
  setSign: (sign) =>
    set({
      sign: sign,
    }),
}));

export default useSignStore;
