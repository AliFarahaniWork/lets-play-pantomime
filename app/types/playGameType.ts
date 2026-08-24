import type { WordBank } from "~/types/generalType";

export type PlayGameStore = {
  words: WordBank[];
  currentTeam: number;
  setCurrentTeam: (value: number) => void;
  score: number;
  setScore: (value: number) => void;
  currentRound: number;
  setCurrentRound: (value: number) => void;
  playerChoice: number;
  setPlayerChoice: (value: number) => void;
  wordIndex: number;
  setWordIndex: (value: number) => void;
  gameStarted: boolean;
  setGameStarted: (value: boolean) => void;
  gameTime: number;
  setGameTime: (value: number | ((previousTime : number) => number)) => void;
};
