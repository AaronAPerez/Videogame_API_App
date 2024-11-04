// hooks/useRetroGaming.ts
import { create } from 'zustand';
import { RetroGame, RetroSystem, SaveState } from '../types/RetroGaming';

interface RetroGamingStore {
  currentGame?: RetroGame;
  currentSystem?: RetroSystem;
  saveStates: SaveState[];
  favorites: RetroGame[];
  recentGames: RetroGame[];
  isEmulatorReady: boolean;
  isPaused: boolean;
  volume: number;
  setCurrentGame: (game: RetroGame | undefined) => void;
  setCurrentSystem: (system: RetroSystem | undefined) => void;
  addSaveState: (state: SaveState) => void;
  toggleFavorite: (gameId: string) => void;
  addRecentGame: (game: RetroGame) => void;
  setEmulatorReady: (ready: boolean) => void;
  setPaused: (paused: boolean) => void;
  setVolume: (volume: number) => void;
}

const useRetroGaming = create<RetroGamingStore>((set, get) => ({
  saveStates: [],
  favorites: [],
  recentGames: [],
  isEmulatorReady: false,
  isPaused: false,
  volume: 0.7,

  setCurrentGame: (game) => set({ currentGame: game }),
  setCurrentSystem: (system) => set({ currentSystem: system }),
  
  addSaveState: (state) => set((store) => ({
    saveStates: [state, ...store.saveStates]
  })),
  
  toggleFavorite: (gameId) => set((store) => {
    const favorites = [...store.favorites];
    const index = favorites.findIndex(g => g.id === gameId);
    if (index >= 0) {
      favorites.splice(index, 1);
    } else {
      const game = store.currentGame;
      if (game && game.id === gameId) {
        favorites.push(game);
      }
    }
    return { favorites };
  }),
  
  addRecentGame: (game) => set((store) => {
    const recentGames = [
      game,
      ...store.recentGames.filter(g => g.id !== game.id)
    ].slice(0, 10);
    return { recentGames };
  }),
  
  setEmulatorReady: (ready) => set({ isEmulatorReady: ready }),
  setPaused: (paused) => set({ isPaused: paused }),
  setVolume: (volume) => set({ volume }),
}));

export default useRetroGaming;