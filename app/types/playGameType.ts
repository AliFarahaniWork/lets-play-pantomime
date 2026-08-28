
export type WordBank = {
  id: number;
  text: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
};

export type PlayGameStore = {
  words: WordBank[];
  currentTeamIndex: number;
  setCurrentTeam: (value: number) => void;
  currentRound: number;
  setCurrentRound: (value: number) => void;
  playerChoice: number;
  setPlayerChoice: (value: number) => void;
  wordIndex: number;
  setWordIndex: (value: number) => void;
  gameStarted: boolean;
  setGameStarted: (value: boolean) => void;
  gameTime: number;
  setGameTime: (value: number | ((previousTime: number) => number)) => void;
  nextWord: () => void;
  playAgain: () => void;
};
