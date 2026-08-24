import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Data, WordBank } from "~/types/data";

const WORD_BANK = [
  {
    id: 1,
    text: "spider man",
  },
  {
    id: 2,
    text: "pizza",
  },
  {
    id: 3,
    text: "swimming",
  },
  {
    id: 4,
    text: "elephant",
  },
  {
    id: 5,
    text: "sleeping",
  },
  {
    id: 6,
    text: "football",
  },
  {
    id: 7,
    text: "basketball",
  },
  {
    id: 8,
    text: "cooking",
  },
  {
    id: 9,
    text: "dancing",
  },
  {
    id: 10,
    text: "singing",
  },
  {
    id: 11,
    text: "driving",
  },
  {
    id: 12,
    text: "flying",
  },
  {
    id: 13,
    text: "running",
  },
  {
    id: 14,
    text: "crying",
  },
  {
    id: 15,
    text: "laughing",
  },
  {
    id: 16,
    text: "fishing",
  },
  {
    id: 17,
    text: "boxing",
  },
  {
    id: 18,
    text: "reading",
  },
  {
    id: 19,
    text: "writing",
  },
  {
    id: 20,
    text: "brushing teeth",
  },
  {
    id: 21,
    text: "cat",
  },
  {
    id: 22,
    text: "dog",
  },
  {
    id: 23,
    text: "monkey",
  },
  {
    id: 24,
    text: "lion",
  },
  {
    id: 25,
    text: "snake",
  },
  {
    id: 26,
    text: "doctor",
  },
  {
    id: 27,
    text: "teacher",
  },
  {
    id: 28,
    text: "police officer",
  },
  {
    id: 29,
    text: "firefighter",
  },
  {
    id: 30,
    text: "chef",
  },
  {
    id: 31,
    text: "superman",
  },
  {
    id: 32,
    text: "batman",
  },
  {
    id: 33,
    text: "iron man",
  },
  {
    id: 34,
    text: "hulk",
  },
  {
    id: 35,
    text: "guitar",
  },
  {
    id: 36,
    text: "telephone",
  },
  {
    id: 37,
    text: "umbrella",
  },
  {
    id: 38,
    text: "toothbrush",
  },
  {
    id: 39,
    text: "airplane",
  },
  {
    id: 40,
    text: "birthday cake",
  },
];

type PantomimeStore = {
  words: WordBank[];
  teamName: string;
  playerName: string;
  data: Data[];
  setTeamName: (value: string) => void;
  setPlayerName: (value: string) => void;
  addTeam: (teamName : string) => void;
  addPlayerName: (index: number, playerName: string) => void;
};
export const usePantomimeStore = create<PantomimeStore>((set) => ({
  words: WORD_BANK,
  teamName: "",
  playerName: "",
  data: [],
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
  addPlayerName: (index, playerName) => {
    set((state) => {
      const players = [...state.data];
      players[index].playerName.push(playerName);
      return {
        data: players,
      };
    });
  },
}));
