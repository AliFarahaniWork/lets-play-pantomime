import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PageSetupStore } from "~/types/pageSetupType";


export const usePageSetupStore = create<PageSetupStore>((set) => ({
  teamName: "",
  playerName: "",
  data: [],
  round: 0,
  time: 0,
  score: 0,
  setTeamName: (value) => {
    set({ teamName: value });
  },
  setPlayerName: (value) => {
    set({ playerName: value });
  },
  addTeam: (teamName) => {
    const team = {
      teamName,
      playerName: [],
      score: 0,
    };
    set((state) => ({
      data: [...state.data, team],
    }));
  },
  addPlayer: (index, playerName) => {
    set((state) => {
      const players = [...state.data];
      players[index].playerName.push(playerName);
      return {
        data: players,
      };
    });
  },
  setRound: (value) => {
    set({ round: value });
  },
  setTime: (value) => {
    set({ time: value });
  },
  setScore:(value) => {}
}));
