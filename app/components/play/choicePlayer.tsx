import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

import { Button } from "~/components/ui/button";

export const ChoicePlayer = ({
  currentTeamIndex,
}: {
  currentTeamIndex: number;
}) => {
  // Main Data
  const data = usePageSetupStore((s) => s.data);

  // Player Choice
  const playerChoice = usePlayGameStore((s) => s.playerChoice);
  const setPlayerChoice = usePlayGameStore((s) => s.setPlayerChoice);

  // Game Status
  const gameStarted = usePlayGameStore((s) => s.gameStarted);

  return (
    <div>
      {!gameStarted && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-gray-500">Choose Player</p>

          <div className="flex flex-row flex-wrap justify-center gap-2">
            {data[currentTeamIndex]?.playerName.map(
              (player: string, indexPlayer: number) => (
                <Button
                  key={indexPlayer}
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setPlayerChoice(indexPlayer);
                  }}
                  className={
                    playerChoice === indexPlayer
                      ? `
                        border-[#FFAA0F]
                        bg-[#FFAA0F]
                        text-black
                        hover:bg-[#FFAA0F]
                        hover:text-black
                      `
                      : `
                        border-black
                        bg-white
                        text-black
                        hover:bg-black
                        hover:text-white
                      `
                  }
                >
                  {player}
                </Button>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};
