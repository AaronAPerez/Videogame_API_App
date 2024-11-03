import { create } from 'zustand';

interface GameDrawerStore {
  gameId?: number;
  isOpen: boolean;
  onOpen: (gameId: number) => void;
  onClose: () => void;
}

const useGameDrawer = create<GameDrawerStore>((set) => ({
  gameId: undefined,
  isOpen: false,
  onOpen: (gameId) => set({ gameId, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useGameDrawer;