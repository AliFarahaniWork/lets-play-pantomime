import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlayGameStore } from "~/types/playGameType";
import {  } from "module";
import { WORD_BANK } from "~/data/WORD_BANK";


export const usePlayGameStore = create<PlayGameStore>((set) => ({
  words: WORD_BANK,
  currentTeamIndex: 0,
  currentRound: 0,
  playerChoice: 0,
  wordIndex: 0,
  gameStarted: false,
  gameTime: 0,
  setCurrentTeam: (value) => {
    set({ currentTeamIndex: value });
  },
  setCurrentRound: (value) => {
    set({ currentRound: value });
  },
  setPlayerChoice: (value) => {
    set({ playerChoice: value });
  },
  setWordIndex: (value) => {
    set({ wordIndex: value });
  },
  setGameStarted: (value) => {
    set({ gameStarted: value });
  },
  setGameTime: (value) => {
    set((state) => ({
      gameTime:
        typeof value === "function"
          ? (value as (prev: number) => number)(state.gameTime)
          : value,
    }));
  },
  nextWord: () => {
    set((state) => ({
      wordIndex: state.wordIndex + 1,
    }));
  },
  playAgain: () => {
    set((state) => ({
      currentTeam: 0,
      currentRound: 0,
      gameStarted: false,
      gameTime: 0,
      wordIndex: state.wordIndex + 1,
    }));
  },

}));
