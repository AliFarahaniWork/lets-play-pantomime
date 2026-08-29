import { useNavigate } from "react-router";

import { usePageSetupStore } from "~/stores/pageSetupStore";
import { usePlayGameStore } from "~/stores/playGameStore";

import { InputTeamPlayerName } from "~/components/setup/inputTeamPlayerName";
import { ShowTeamPlayerName } from "~/components/setup/ShowTeamPlayerName";
import { RoundSelector } from "~/components/setup/roundSelected";
import { TimeSelector } from "~/components/setup/timeSelector";

import { Button } from "~/components/ui/button";

const PageSetup = () => {
  const navigate = useNavigate();

  // Main Data
  const data = usePageSetupStore((s) => s.data);

  // Round Detail
  const round = usePageSetupStore((s) => s.round);

  // Time Detail
  const time = usePageSetupStore((s) => s.time);
  const setGameTime = usePlayGameStore((s) => s.setGameTime);

  const canPlay = Boolean(
    time &&
    round &&
    data.length >= 2 &&
    data.every((team) => team.playerName.length >= 1),
  );

  return (
    <main className="min-h-screen w-full bg-white px-4 py-10 text-black">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-8">
        {/* Set Round */}
        <RoundSelector />

        {/* Set Time */}
        <TimeSelector />

        {/* Add Team */}
        <InputTeamPlayerName />

        {/* Show Teams and Players*/}
        <ShowTeamPlayerName />

        {/* Start Game */}
        <Button
          className={`
            mt-4
            w-full
            max-w-[270px]
            border
            transition-all
            duration-200

            ${
              canPlay
                ? `
                  border-[#FFAA0F]
                  bg-[#FFAA0F]
                  text-black

                  hover:border-black
                  hover:bg-black
                  hover:text-white
                `
                : `
                  cursor-not-allowed
                  border-gray-200
                  bg-gray-100
                  text-gray-400
                `
            }
          `}
          disabled={!canPlay}
          onClick={() => {
            setGameTime(time);
            navigate("/game");
          }}
        >
          Start Game
        </Button>
      </div>
    </main>
  );
};

export default PageSetup;
