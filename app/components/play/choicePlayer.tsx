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
    <div className="w-full">
      {!gameStarted && (
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-3

            max-[480px]:gap-2

            md:gap-3
            lg:gap-3
          "
        >
          <p
            className="
              text-sm
              text-gray-500

              max-[480px]:text-xs

              md:text-sm
              lg:text-sm
            "
          >
            Choose Player
          </p>

          <div
            className="
              flex
              w-full
              flex-row
              flex-wrap
              justify-center
              gap-2
            "
          >
            {data[currentTeamIndex]?.playerName.map(
              (player: string, indexPlayer: number) => (
                <Button
                  key={indexPlayer}
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setPlayerChoice(indexPlayer);
                  }}
                  className={`
                    max-[480px]:w-full
                    max-[480px]:text-sm

                    md:w-auto
                    lg:w-auto

                    ${
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
                  `}
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
