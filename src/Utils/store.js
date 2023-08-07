import { create } from "zustand";

const useColorStore = create((set) => ({
  colors: {
    "Hull Color": "#ff00ff",
    "Power Poles": "",
    "Poling Platform": "",
  },
  activeState: 0,
  setColors: (color) =>
    set((state) => ({
      colors: {
        ...state.colors,
        [color.part]: color.hex,
      },
    })),
  setActiveState: (activeState) =>
    set((state) => ({
      activeState: activeState,
    })),
}));

export default useColorStore;
