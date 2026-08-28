import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PageSetupStore } from "~/types/pageSetupType";


export const usePageSetupStore = create<PageSetupStore>()(
  persist(
    (set) => ({
      teamName: "",
      playerName: "",
      data: [],
      round: 0,
      time: 0,
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
      setScore: (teamIndex, value) => {
        set((state) => {
          const newData = state.data.map((team, index) => {
            if (index === teamIndex) {
              return { ...team, score: team.score + value };
            }
            return team;
          });
          return { data: newData };
        });
      },
      removeTeam: (teamIndex: number) => {
        set((state) => ({
          data: state.data.filter((_, index) => index !== teamIndex),
        }));
      },
      removePlayer: (teamIndex, playerIndex) => {
        set((state) => ({
          data: state.data.map((team, index) =>
            index === teamIndex
              ? {
                  ...team,
                  playerName: team.playerName.filter(
                    (_, i) => i !== playerIndex,
                  ),
                }
              : team,
          ),
        }));
      },
      updateTeamName: (teamIndex: number, newTeamName: string) => {
        set((state) => {
          const newData = state.data.map((team, index) =>
            index === teamIndex ? { ...team, teamName: newTeamName } : team,
          );
          return { data: newData };
        });
      },
      resetScore: () => {
        set((state) => ({
          data: state.data.map((team) => ({ ...team, score: 0 })),
        }));
      },
      clearSetup: () => {
        set({
          teamName: "",
          playerName: "",
          data: [],
          round: 0,
          time: 0,
        });
      },
    }),
    {
      name: "Setup Game Data",
    },
  ),
);
