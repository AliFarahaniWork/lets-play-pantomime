import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlayGameStore } from "~/types/playGameType";


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


export const usePlayGameStore = create<PlayGameStore>((set) => ({
  words: WORD_BANK,
  score: 0,
  currentTeam: 0,
  currentRound: 0,
  playerChoice: 0,
  wordIndex: 0,
  gameStarted: false,
  gameTime: 0,
  setScore: (value) => {set({ score: value });},
  setCurrentTeam: (value) => {
    set({ currentTeam: value });
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
        typeof value === 'function'
          ? (value as (prev: number) => number)(state.gameTime)
          :value
    }));
  },
}));
