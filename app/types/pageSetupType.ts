export type Data = {
  teamName: string;
  playerName: string[];
  score: number;
};
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
  setScore: (teamIndex: number, value: number) => void;
  removeTeam: (value: number) => void;
  removePlayer: (valueOne: number, valueTwon: number) => void;
  updateTeamName: (teamIndex: number, newTeamName: string) => void;
  resetScore: () => void;
  clearSetup: () => void;
};
