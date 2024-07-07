import { Vector3 } from "three";
import { create } from "zustand";

/**
 * Zustand store for managing the selected sign state.
 * It initializes with a default sign object and provides a setter function to update it.
 *
 * @typedef {Object} SignState
 * @property {string} name - The name of the selected sign.
 * @property {Vector3} positionCamera - The position of the camera when the sign is selected.
 */

/**
 * Zustand hook for managing the selected sign state.
 * It initializes with a default sign object and provides a setter function to update it.
 *
 * @type {import('zustand').UseStore<SignState>}
 */
const useSignStore = create((set) => ({
  /**
   * Initial state with 'NOT_SIGN_SELECTED' as the default sign name
   * and a default camera position.
   * @type {SignState}
   */
  sign: {
    name: "NOT_SIGN_SELECTED",
    positionCamera: new Vector3(0, 2, 4),
  },
  /**
   * Setter function to update the selected sign state.
   * @param {SignState} sign - The new sign object to set.
   */
  setSign: (sign) =>
    set({
      sign: sign,
    }),
}));

export default useSignStore;
