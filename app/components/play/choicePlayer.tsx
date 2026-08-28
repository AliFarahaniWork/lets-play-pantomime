import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

export const ChoicePlayer = ({ currentTeamIndex }: { currentTeamIndex: number }) => {
  //Main Data
  const data = usePageSetupStore((s) => s.data);

  //Index detail
  const setPlayerChoice = usePlayGameStore((s) => s.setPlayerChoice);

  const gameStarted = usePlayGameStore((s) => s.gameStarted);
  const setGameStarted = usePlayGameStore((s) => s.setGameStarted);

  return (
    <div>
      {!gameStarted &&
        data[currentTeamIndex].playerName.map(
          (player: string, indexPlayer: number) => {
            return (
              <button
                className="px-5 mx-2 border border-white hover:bg-amber-50 hover:text-black"
                key={indexPlayer}
                onClick={() => {
                  setPlayerChoice(indexPlayer);
                  setGameStarted(true);
                }}
              >
                {player}
              </button>
            );
          },
        )}
    </div>
  );
};
