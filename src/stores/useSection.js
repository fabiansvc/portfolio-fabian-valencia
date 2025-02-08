import {create}  from "zustand";

export default function useSection() {
  return create((set) => ({
    section: {
      name: "NOT_SECTION_SELECTED",
    },
    setSection: (section) =>
      set({
        section: section,
      }),
  }));
}