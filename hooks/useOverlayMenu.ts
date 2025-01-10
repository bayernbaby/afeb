import { create } from 'zustand';

interface OverlayMenuStore {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
}

export const useOverlayMenu = create<OverlayMenuStore>((set) => ({
  isOpen: false,
  close: () => {
    set({ isOpen: false });
  },
  toggle: () => {
    set((state) => {
      const newState = { isOpen: !state.isOpen };
      return newState;
    });
  },
}));
