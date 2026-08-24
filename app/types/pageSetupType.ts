import type { Data } from "~/types/generalType";

export type PageSetupStore = {
  teamName: string;
  playerName: string;
  data: Data[];
  setTeamName: (value: string) => void;
  setPlayerName: (value: string) => void;
  addTeam: (teamName: string) => void;
  addPlayer: (index: number, playerName: string) => void;
  round: number;
  setRound: (value: number) => void;
  time: number;
  setTime: (value: number) => void;
  score: number;
  setScore: (value: number) => void;
};
